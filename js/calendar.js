/* ============================================================
   calendar.js — 日历渲染引擎
   负责: 月视图网格生成 · 导航 · 节假日/物种检测
   依赖: data.js (CALENDAR_DATA)
   ============================================================ */

var Calendar = (function() {
  'use strict';

  /* ---- 构造函数 ---- */
  function Calendar() {
    var today = new Date();
    this.today = today;
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();        // 0-11 (0 = 一月)
    this.todayDate = today.getDate();
    this.todayMonth = today.getMonth();
    this.todayYear = today.getFullYear();

    this._initPicker();
  }

  /* ---- 闰年判断 ---- */
  Calendar.prototype.isLeapYear = function(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  };

  /* ---- 核心渲染入口 ---- */
  Calendar.prototype.render = function() {
    this.updateHero();
    this.updateTitle();
    this.renderGrid();
  };

  /* ---- Hero 区域更新 ---- */
  Calendar.prototype.updateHero = function() {
    var monthData = CALENDAR_DATA.monthlyContent[this.currentMonth];
    var heroImage = document.getElementById('heroImage');

    // 更新背景图（含渐变降级：图片加载失败时显示默认渐变）
    heroImage.style.backgroundImage =
      'url("' + monthData.backgroundPath + '"), ' +
      'linear-gradient(135deg, #2c3e50 0%, #1a252f 30%, #2c5f7c 60%, #3a7ca5 100%)';

    // 更新月份名称
    document.getElementById('heroMonthZh').textContent = monthData.nameZh;
    document.getElementById('heroMonthEn').textContent = monthData.nameEn;

    // 更新季节描述
    document.getElementById('heroSeasonZh').textContent = monthData.seasonZh;
    document.getElementById('heroSeasonEn').textContent = monthData.seasonEn;

    // 更新照片署名
    document.getElementById('heroCreditZh').textContent = monthData.backgroundCreditZh;
    document.getElementById('heroCreditEn').textContent = monthData.backgroundCreditEn;

    // 更新照片版权
    document.getElementById('heroCopyright').textContent =
      '© ' + (monthData.backgroundCopyright || '');
  };

  /* ---- 标题更新 ---- */
  Calendar.prototype.updateTitle = function() {
    var monthData = CALENDAR_DATA.monthlyContent[this.currentMonth];
    document.getElementById('titleZh').textContent =
      this.currentYear + '年 ' + monthData.nameZh;
    document.getElementById('titleEn').textContent =
      monthData.nameEn + ' ' + this.currentYear;
  };

  /* ---- 日历网格渲染 ---- */
  Calendar.prototype.renderGrid = function() {
    var grid = document.getElementById('calendarGrid');
    // 清空旧内容
    grid.innerHTML = '';

    // 计算网格参数
    var firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay(); // 0=周日
    var daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    var prevMonthDays = new Date(this.currentYear, this.currentMonth, 0).getDate();

    var rowsNeeded = Math.ceil((firstDay + daysInMonth) / 7);
    // 至少5行，保证手机端各月份高度一致不跳动
    if (rowsNeeded < 5) rowsNeeded = 5;
    var totalCells = rowsNeeded * 7;
    var cell, dateNum, dayOfWeek, i;

    for (i = 0; i < totalCells; i++) {
      cell = document.createElement('div');
      cell.className = 'cal-cell';
      cell.setAttribute('role', 'gridcell');

      if (i < firstDay) {
        // ---- 前置补位日 (上个月) ----
        dateNum = prevMonthDays - firstDay + i + 1;
        this.setupPaddingDay(cell, dateNum, this.currentMonth - 1, this.currentYear);
      } else if (i - firstDay >= daysInMonth) {
        // ---- 后置补位日 (下个月) ----
        dateNum = i - firstDay - daysInMonth + 1;
        this.setupPaddingDay(cell, dateNum, this.currentMonth + 1, this.currentYear);
      } else {
        // ---- 当月日期 ----
        dateNum = i - firstDay + 1;
        this.setupCurrentMonthDay(cell, dateNum);
      }

      grid.appendChild(cell);
    }
  };

  /* ---- 设置补位日单元格 ---- */
  Calendar.prototype.setupPaddingDay = function(cell, day, targetMonth, targetYear) {
    cell.classList.add('padding-day');

    // data-date 使用实际代表的日期（用于可能的跨月点击）
    var dt = new Date(targetYear, targetMonth, day);
    cell.setAttribute('data-date', this.formatDate(dt));

    var dateSpan = document.createElement('span');
    dateSpan.className = 'date-number';
    dateSpan.textContent = day;
    cell.appendChild(dateSpan);

    cell.setAttribute('aria-label', this.buildAriaLabel(day, dt.getDay(), true));

    // 农历日期 (仅中文模式可见)
    this._addLunarDateSpan(cell);
  };

  /* ---- 设置当月日单元格 ---- */
  Calendar.prototype.setupCurrentMonthDay = function(cell, day) {
    cell.classList.add('current-month');

    var dateObj = new Date(this.currentYear, this.currentMonth, day);
    cell.setAttribute('data-date', this.formatDate(dateObj));
    cell.setAttribute('tabindex', '0');

    // 日期数字 (左上角)
    var dateSpan = document.createElement('span');
    dateSpan.className = 'date-number';
    dateSpan.textContent = day;
    cell.appendChild(dateSpan);

    // 检查是否为今天
    if (this.currentYear === this.todayYear &&
        this.currentMonth === this.todayMonth &&
        day === this.todayDate) {
      cell.classList.add('today');
    }

    // 农历日期 (仅中文模式可见)
    this._addLunarDateSpan(cell);

    // 指示器容器（圆点 + 标签）
    var indicators = document.createElement('div');
    indicators.className = 'cell-indicators';

    // 检查节假日
    var holidays = this.getHolidaysForDate(day);
    if (holidays.length > 0) {
      for (var h = 0; h < holidays.length; h++) {
        var dot = document.createElement('span');
        dot.className = 'dot holiday-dot';
        dot.setAttribute('aria-hidden', 'true');
        dot.title = holidays[h].nameZh + ' / ' + holidays[h].nameEn;
        indicators.appendChild(dot);

        var label = document.createElement('span');
        label.className = 'holiday-label';
        // 使用 data-lang 属性配合 JS 语言切换
        label.innerHTML =
          '<span class="lang-zh-only">' + holidays[h].nameZh + '</span>' +
          '<span class="lang-en-only">' + holidays[h].nameEn + '</span>';
        indicators.appendChild(label);

        if (holidays.length > 1 && h < holidays.length - 1) {
          // 同一天多个节日时换行
          indicators.appendChild(document.createElement('br'));
        }
      }
    }

    // 检查物种 — 仅添加可点击类名，不显示绿点
    var speciesEntry = this.getSpeciesForDate(day);
    if (speciesEntry) {
      cell.classList.add('species-date');
    }

    // 闰年彩蛋：2月29日
    if (this.currentMonth === 1 && day === 29 && this.isLeapYear(this.currentYear)) {
      cell.classList.add('leap-day');
      cell.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.18) 0%, rgba(255,165,0,0.10) 50%, rgba(255,215,0,0.18) 100%)';
      cell.style.border = '2px solid rgba(255, 180, 0, 0.6)';
      cell.style.boxShadow = 'inset 0 0 20px rgba(255, 200, 0, 0.08)';

      var leapLabel = document.createElement('span');
      leapLabel.className = 'leap-day-label';
      leapLabel.innerHTML =
        '<span class="lang-zh-only">闰日彩蛋</span>' +
        '<span class="lang-en-only">Leap Day</span>';
      indicators.appendChild(leapLabel);
    }

    cell.appendChild(indicators);

    // ARIA 标签
    var holidayNames = '';
    if (holidays.length > 0) {
      holidayNames = ' · ' + holidays.map(function(h) { return h.nameZh; }).join(', ');
    }
    cell.setAttribute('aria-label', this.buildAriaLabel(day, dateObj.getDay(), false) + holidayNames);
  };

  /* ---- 查某天是否为节假日 ---- */
  Calendar.prototype.getHolidaysForDate = function(day) {
    var self = this;
    return CALENDAR_DATA.holidays.filter(function(h) {
      return h.month === self.currentMonth + 1 && h.day === day;
    });
  };

  /* ---- 构建农历查找表 ---- */
  Calendar.prototype._buildLunarLookup = function() {
    if (this._lunarLookup) return this._lunarLookup;
    var lookup = {};
    var months = CALENDAR_DATA.lunarMonths;
    var dayNames = CALENDAR_DATA.lunarDayNames;
    for (var m = 0; m < months.length; m++) {
      var parts = months[m][0].split('-');
      var y = +parts[0], mo = +parts[1] - 1, da = +parts[2];
      var name = months[m][1];
      var days = months[m][2];
      for (var d = 0; d < days; d++) {
        var dt = new Date(y, mo, da + d);
        var key = this.formatDate(dt);
        lookup[key] = (d === 0) ? name : dayNames[d + 1];
      }
    }
    this._lunarLookup = lookup;
    return lookup;
  };

  /* ---- 获取农历日期文本 ---- */
  Calendar.prototype.getLunarDateText = function(dateStr) {
    return this._buildLunarLookup()[dateStr];
  };

  /* ---- 添加农历日期 span (仅中文可见) ---- */
  Calendar.prototype._addLunarDateSpan = function(cell) {
    var lunarText = this.getLunarDateText(cell.getAttribute('data-date'));
    if (lunarText) {
      var lunarSpan = document.createElement('span');
      lunarSpan.className = 'lunar-date lang-zh-only';
      lunarSpan.textContent = lunarText;
      cell.appendChild(lunarSpan);
    }
  };

  /* ---- 查某天是否有物种 ---- */
  Calendar.prototype.getSpeciesForDate = function(day) {
    var monthData = CALENDAR_DATA.monthlyContent[this.currentMonth];
    if (!monthData || !monthData.species) return null;

    for (var i = 0; i < monthData.species.length; i++) {
      if (monthData.species[i].day === day) {
        return monthData.species[i];
      }
    }
    return null;
  };

  /* ---- 格式化日期字符串 YYYY-MM-DD ---- */
  Calendar.prototype.formatDate = function(dt) {
    var y = dt.getFullYear();
    var m = String(dt.getMonth() + 1).padStart(2, '0');
    var d = String(dt.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
  };

  /* ---- 构建 ARIA 标签 ---- */
  Calendar.prototype.buildAriaLabel = function(day, dow, isPadding) {
    var dowZh = ['周日','周一','周二','周三','周四','周五','周六'];
    var dowEn = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var monthZh = CALENDAR_DATA.monthlyContent[this.currentMonth].nameZh;
    var monthEn = CALENDAR_DATA.monthlyContent[this.currentMonth].nameEn;

    if (isPadding) {
      return '补位日 / Padding day: ' + day;
    }

    return monthZh + day + '日 ' + dowZh[dow] + ' / ' +
           monthEn + ' ' + day + ' ' + dowEn[dow];
  };

  /* ---- 导航: 上个月 ---- */
  Calendar.prototype.goToPrevMonth = function() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.render();
  };

  /* ---- 导航: 下个月 ---- */
  Calendar.prototype.goToNextMonth = function() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.render();
  };

  /* ---- 导航: 回到今天 ---- */
  Calendar.prototype.goToToday = function() {
    var today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.todayYear = today.getFullYear();
    this.todayMonth = today.getMonth();
    this.todayDate = today.getDate();
    this.render();
  };

  /* ---- 导航: 跳转到指定年月 ---- */
  Calendar.prototype.goToMonth = function(year, month) {
    this.currentYear = year;
    this.currentMonth = month;
    this.render();
    this._closePicker();
  };

  /* ========================================
     月份跳转器 (Picker)
     ======================================== */

  /* 初始化跳转器 */
  Calendar.prototype._initPicker = function() {
    var self = this;

    // 构建月份网格
    var grid = document.getElementById('pickerMonthGrid');
    var monthsZh = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    var monthsEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    for (var i = 0; i < 12; i++) {
      var btn = document.createElement('button');
      btn.className = 'picker-month-btn';
      btn.setAttribute('data-month', i);
      btn.innerHTML =
        '<span class=\"lang-zh-only\">' + monthsZh[i] + '</span>' +
        '<span class=\"lang-en-only\">' + monthsEn[i] + '</span>';
      btn.addEventListener('click', function() {
        var m = parseInt(this.getAttribute('data-month'), 10);
        self.goToMonth(self._pickerYear, m);
      });
      grid.appendChild(btn);
    }

    // 标题点击 → 打开/关闭
    var titleEl = document.getElementById('calendarTitle');
    titleEl.addEventListener('click', function(e) {
      e.stopPropagation();
      self._togglePicker();
    });

    // 年切换
    document.getElementById('pickerYearPrev').addEventListener('click', function(e) {
      e.stopPropagation();
      self._pickerYear--;
      self._updatePickerState();
    });
    document.getElementById('pickerYearNext').addEventListener('click', function(e) {
      e.stopPropagation();
      self._pickerYear++;
      self._updatePickerState();
    });

    // 点击外部关闭
    document.addEventListener('click', function(e) {
      var picker = document.getElementById('monthPicker');
      if (!picker.hidden) {
        var title = document.getElementById('calendarTitle');
        if (!picker.contains(e.target) && e.target !== title && !title.contains(e.target)) {
          self._closePicker();
        }
      }
    });

    // Escape 关闭
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        self._closePicker();
      }
    });
  };

  /* 打开/关闭跳转器 */
  Calendar.prototype._togglePicker = function() {
    var picker = document.getElementById('monthPicker');
    if (picker.hidden) {
      this._pickerYear = this.currentYear;
      this._updatePickerState();
      picker.hidden = false;
    } else {
      this._closePicker();
    }
  };

  /* 关闭跳转器 */
  Calendar.prototype._closePicker = function() {
    document.getElementById('monthPicker').hidden = true;
  };

  /* 刷新跳转器状态 */
  Calendar.prototype._updatePickerState = function() {
    var year = this._pickerYear;
    document.getElementById('pickerYearLabel').textContent = year;

    // 高亮当前选中的月份
    var buttons = document.querySelectorAll('.picker-month-btn');
    buttons.forEach(function(btn) {
      var m = parseInt(btn.getAttribute('data-month'), 10);
      if (year === this.currentYear && m === this.currentMonth &&
          !document.getElementById('monthPicker').hidden) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }.bind(this));
  };

  // 返回构造函数
  return Calendar;
})();
