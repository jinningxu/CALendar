/* ============================================================
   lunar.js — 农历计算模块
   基于标准的农历数据编码表，覆盖 1900–2100 年
   所有日期计算使用 UTC 基准，避免本地时区/DST 干扰
   ============================================================ */

var LunarCalendar = (function() {
  'use strict';

  /* ================================================================
     农历年数据 1900–2100（共 201 年）
     每个十六进制数编码一年的信息：
       bit 0–3:   闰月月份（1–12，0 = 无闰月）
       bit 4–15:  1–12 月的大小月（1 bit/月）
                  bit 15=正月, bit 14=二月, ..., bit 4=十二月
                  1=30天，0=29天
       bit 16:    闰月大小（1=30天，0=29天），仅闰月存在时有效
     ================================================================ */
  var LUNAR_INFO = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a4d0, 0x0d150, 0x0f252,
    0x0d520
  ];

  /* ---- 农历月份 & 日期名称 ---- */
  var MONTH_NAMES = [
    '', '正月','二月','三月','四月','五月','六月',
    '七月','八月','九月','十月','十一月','十二月'
  ];

  var DAY_NAMES = [
    '',
    '初一','初二','初三','初四','初五','初六','初七','初八','初九','初十',
    '十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',
    '廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'
  ];

  /* ---- 解码：闰月月份（0=无闰）---- */
  function leapMonth(y) {
    return LUNAR_INFO[y] & 0xf;
  }

  /* ---- 解码：闰月天数 ---- */
  function leapDays(y) {
    if (leapMonth(y)) {
      return (LUNAR_INFO[y] & 0x10000) ? 30 : 29;
    }
    return 0;
  }

  /* ---- 解码：月份天数（m 为 1–12，1-indexed）---- */
  function monthDays(y, m) {
    return (LUNAR_INFO[y] & (0x10000 >> m)) ? 30 : 29;
  }

  /* ---- 农历年总天数 ---- */
  function yearDays(y) {
    var i, sum = 348; // 12 * 29
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += (LUNAR_INFO[y] & i) ? 1 : 0;
    }
    return sum + leapDays(y);
  }

  /* ---- 计算某公历年的春节 UTC 毫秒数（缓存）---- */
  var _cnyCache = {};

  function getSpringFestivalUTC(year) {
    if (_cnyCache[year] !== undefined) return _cnyCache[year];

    var y = year - 1900;
    if (y < 0 || y >= LUNAR_INFO.length) return null;

    var offset = 0;
    for (var i = 0; i < y; i++) {
      offset += yearDays(i);
    }

    // 1900-01-31 是 1900 年正月初一
    // 使用 UTC+12h 避免任何时区/日期边界问题
    var baseTime = Date.UTC(1900, 0, 31, 12, 0, 0);
    var cnyTime = baseTime + offset * 86400000;

    _cnyCache[year] = cnyTime;
    return cnyTime;
  }

  /* ================================================================
     getLunarText(dateStr) — 主入口
     输入: "YYYY-MM-DD" 格式的公历日期字符串
     返回: 农历文本，如 "正月"、"十五"、"初二"、"十一月"
           如果日期超出 1900–2100 范围，返回 null
     ================================================================ */
  function getLunarText(dateStr) {
    if (!dateStr) return null;

    var parts = dateStr.split('-');
    var gYear = parseInt(parts[0], 10);
    var gMonth = parseInt(parts[1], 10) - 1; // 0-indexed
    var gDay = parseInt(parts[2], 10);

    if (isNaN(gYear) || isNaN(gMonth) || isNaN(gDay)) return null;

    // 使用 UTC 时间，避免本地时区/DST 干扰
    var gregTime = Date.UTC(gYear, gMonth, gDay, 12, 0, 0);

    // 找到该日期属于哪个农历年
    var cnyThisYear = getSpringFestivalUTC(gYear);
    if (cnyThisYear === null) return null;

    var lunarYearIndex;
    var cnyTime;

    if (gregTime >= cnyThisYear) {
      // 属于今年开始的农历年
      lunarYearIndex = gYear - 1900;
      cnyTime = cnyThisYear;
    } else {
      // 属于去年开始的农历年（日期在春节之前）
      lunarYearIndex = gYear - 1901;
      var cnyPrev = getSpringFestivalUTC(gYear - 1);
      if (cnyPrev === null) return null;
      cnyTime = cnyPrev;
    }

    if (lunarYearIndex < 0 || lunarYearIndex >= LUNAR_INFO.length) return null;

    // 距离春节的天数（UTC 毫秒差，不受 DST 影响）
    var dayOffset = Math.floor((gregTime - cnyTime) / 86400000);

    var leap = leapMonth(lunarYearIndex);
    var lunarMonth = 1;
    var lunarDay = 1;
    var isLeap = false;

    // 逐月推算
    for (var m = 1; m <= 12; m++) {
      var mDays = monthDays(lunarYearIndex, m);

      if (dayOffset < mDays) {
        lunarMonth = m;
        lunarDay = dayOffset + 1;
        isLeap = false;
        break;
      }
      dayOffset -= mDays;

      // 检查闰月
      if (leap === m) {
        var leapMdays = leapDays(lunarYearIndex);
        if (dayOffset < leapMdays) {
          lunarMonth = m;
          lunarDay = dayOffset + 1;
          isLeap = true;
          break;
        }
        dayOffset -= leapMdays;
      }
    }

    // 初一显示月份名（如 "正月"、"二月"...），其他显示日名（如 "初二"、"十五"...）
    if (lunarDay === 1) {
      var name = MONTH_NAMES[lunarMonth];
      return isLeap ? ('闰' + name) : name;
    }

    return DAY_NAMES[lunarDay] || ('' + lunarDay);
  }

  /* ---- 反向查找：农历日期 → 公历日期 ---- */
  function gregorianFromLunar(year, lunarMonth, lunarDay) {
    var cnyTime = getSpringFestivalUTC(year);
    if (cnyTime === null) return null;

    var lunarYearIndex = year - 1900;
    if (lunarYearIndex < 0 || lunarYearIndex >= LUNAR_INFO.length) return null;

    var leap = leapMonth(lunarYearIndex);
    var offset = 0;

    for (var m = 1; m < lunarMonth; m++) {
      offset += monthDays(lunarYearIndex, m);
      if (leap === m) offset += leapDays(lunarYearIndex);
    }
    offset += lunarDay - 1;

    var gregTime = cnyTime + offset * 86400000;
    var d = new Date(gregTime);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate()
    };
  }

  /* ---- 计算某年的所有农历节日公历日期 ---- */
  function getLunarHolidays(year) {
    var holidays = [];
    var lunarYearIndex = year - 1900;
    if (lunarYearIndex < 0 || lunarYearIndex >= LUNAR_INFO.length) return holidays;

    // 春节 (正月初一)
    var cny = gregorianFromLunar(year, 1, 1);
    if (cny) {
      holidays.push({ month: cny.month, day: cny.day,
        nameZh: '春节', nameEn: 'Chinese New Year', type: 'chinese' });
    }

    // 除夕 (十二月最后一天 = 当年春节前一天)
    var cnyTime = getSpringFestivalUTC(year);
    if (cnyTime !== null) {
      var chuxiTime = cnyTime - 86400000;
      var chuxiDate = new Date(chuxiTime);
      holidays.push({
        month: chuxiDate.getUTCMonth() + 1,
        day: chuxiDate.getUTCDate(),
        nameZh: '除夕', nameEn: "Chinese New Year's Eve", type: 'chinese'
      });
    }

    // 元宵节 (正月十五)
    var yx = gregorianFromLunar(year, 1, 15);
    if (yx) holidays.push({ month: yx.month, day: yx.day,
      nameZh: '元宵节', nameEn: 'Lantern Festival', type: 'chinese' });

    // 端午节 (五月初五)
    var dw = gregorianFromLunar(year, 5, 5);
    if (dw) holidays.push({ month: dw.month, day: dw.day,
      nameZh: '端午节', nameEn: 'Dragon Boat Festival', type: 'chinese' });

    // 七夕节 (七月初七)
    var qx = gregorianFromLunar(year, 7, 7);
    if (qx) holidays.push({ month: qx.month, day: qx.day,
      nameZh: '七夕节', nameEn: 'Qixi Festival', type: 'chinese' });

    // 中秋节 (八月十五)
    var zq = gregorianFromLunar(year, 8, 15);
    if (zq) holidays.push({ month: zq.month, day: zq.day,
      nameZh: '中秋节', nameEn: 'Mid-Autumn Festival', type: 'chinese' });

    // 重阳节 (九月初九)
    var cy = gregorianFromLunar(year, 9, 9);
    if (cy) holidays.push({ month: cy.month, day: cy.day,
      nameZh: '重阳节', nameEn: 'Double Ninth Festival', type: 'chinese' });

    return holidays;
  }

  /* ---- 公开 API ---- */
  return {
    getLunarText: getLunarText,
    getLunarHolidays: getLunarHolidays
  };

})();
