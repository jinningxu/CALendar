/* ============================================================
   modal.js — 物种详情弹窗
   负责: 打开/关闭弹窗 · 填充物种内容 · 焦点陷阱 · 图片降级
   依赖: data.js (CALENDAR_DATA)
   ============================================================ */

var SpeciesModal = (function() {
  'use strict';

  // 类别名称映射（双语）
  var CATEGORY_LABELS = {
    bird:     { zh: '鸟类',     en: 'Bird' },
    mammal:   { zh: '哺乳动物', en: 'Mammal' },
    reptile:  { zh: '爬行动物', en: 'Reptile' },
    amphibian:{ zh: '两栖动物', en: 'Amphibian' },
    fish:     { zh: '鱼类',     en: 'Fish' },
    insect:   { zh: '昆虫',     en: 'Insect' },
    plant:    { zh: '植物',     en: 'Plant' },
    marine:   { zh: '海洋生物', en: 'Marine Life' }
  };

  // 分类层级标签（双语）
  var TAXON_LABELS = {
    kingdom: { zh: '界', en: 'Kingdom' },
    phylum:  { zh: '门', en: 'Phylum' },
    class:   { zh: '纲', en: 'Class' },
    order:   { zh: '目', en: 'Order' },
    family:  { zh: '科', en: 'Family' },
    genus:   { zh: '属', en: 'Genus' }
  };

  /* ---- 构造函数 ---- */
  function SpeciesModal() {
    this.overlay = document.getElementById('modalOverlay');
    this.card = document.getElementById('modalCard');
    this.closeBtn = document.getElementById('modalClose');
    this.isOpen = false;
    this._bindEvents();
  }

  /* ---- 打开弹窗 ---- */
  SpeciesModal.prototype.open = function(dateStr) {
    this._currentDate = dateStr;  // YYYY-MM-DD

    // 查找该日期的物种
    var speciesId = null;
    if (dateStr) {
      var parts = dateStr.split('-');
      var month = parseInt(parts[1], 10) - 1;
      var day = parseInt(parts[2], 10);
      var monthData = CALENDAR_DATA.monthlyContent[month];
      if (monthData && monthData.species) {
        for (var i = 0; i < monthData.species.length; i++) {
          if (monthData.species[i].day === day) {
            speciesId = monthData.species[i].speciesId;
            break;
          }
        }
      }
    }

    this.populate(speciesId);
    this._loadJournal();
    this.overlay.hidden = false;

    // 强制回流后添加 .open 触发 CSS 过渡
    var self = this;
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        self.overlay.classList.add('open');
      });
    });

    this.isOpen = true;
    document.body.style.overflow = 'hidden';
    this._trapFocus();
  };

  /* ---- 关闭弹窗 ---- */
  SpeciesModal.prototype.close = function() {
    var self = this;
    this.overlay.classList.remove('open');

    // 等过渡动画结束后隐藏
    setTimeout(function() {
      if (!self.isOpen) {
        self.overlay.hidden = true;
      }
    }, 250);

    this.isOpen = false;
    document.body.style.overflow = '';
  };

  /* ---- 填充弹窗内容 ---- */
  SpeciesModal.prototype.populate = function(speciesId) {
    var s = speciesId ? CALENDAR_DATA.species[speciesId] : null;

    // 闰年彩蛋特殊处理
    if (speciesId === 'leap-day-surprise') {
      var leap = CALENDAR_DATA.leapDayContent;
      document.getElementById('modalNameZh').textContent = leap.nameZh;
      document.getElementById('modalNameEn').textContent = leap.nameEn;
      document.getElementById('modalScientific').innerHTML =
        '<span class="lang-zh-only">' + leap.funFactZh + '</span>' +
        '<span class="lang-en-only">' + leap.funFactEn + '</span>';
      document.getElementById('modalScientific').style.display = '';
      document.getElementById('modalCategory').hidden = true;
      document.getElementById('modalTaxonomy').style.display = 'none';

      // 用季节文字作为描述
      var descEl = document.getElementById('modalDescription');
      if (!descEl) {
        descEl = document.createElement('div');
        descEl.className = 'modal-description';
        descEl.id = 'modalDescription';
        var categoryEl = document.getElementById('modalCategory');
        categoryEl.parentNode.insertBefore(descEl, categoryEl.nextSibling);
      }
      descEl.style.display = '';
      descEl.innerHTML =
        '<p class="lang-zh-only">' + leap.descriptionZh + '</p>' +
        '<p class="lang-en-only">' + leap.descriptionEn + '</p>';

      this._loadPhoto(s);
      document.getElementById('modalPhoto').style.display = '';
      document.getElementById('photoCreditBar').style.display = '';
      document.getElementById('photoCreditBar').href = 'https://zoo.sandiegozoo.org/giant-pandas';
      document.getElementById('creditBarZh').textContent = '图片来源：San Diego Zoo, CA';
      document.getElementById('creditBarEn').textContent = 'Photo via San Diego Zoo, CA';
      this.card.scrollTop = 0;
      return;
      return;
    }

    // 恢复描述区（非闰日）
    var descEl2 = document.getElementById('modalDescription');
    if (descEl2) descEl2.style.display = 'none';

    if (s) {
      // 有物种：显示全部信息
      document.getElementById('modalNameZh').textContent = s.nameZh;
      document.getElementById('modalNameEn').textContent = s.nameEn;
      document.getElementById('modalScientific').textContent = s.scientificName;
      document.getElementById('modalScientific').style.display = '';

      // 类别标签
      var catEl = document.getElementById('modalCategory');
      if (CATEGORY_LABELS[s.category]) {
        catEl.hidden = false;
        catEl.innerHTML =
          '<span class="lang-zh-only">' + CATEGORY_LABELS[s.category].zh + '</span>' +
          '<span class="lang-en-only">' + CATEGORY_LABELS[s.category].en + '</span>';
      } else {
        catEl.hidden = true;
      }

      // 分类层级
      var taxonomy = s.taxonomy || {};
      var taxonKeys = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus'];
      taxonKeys.forEach(function(key) {
        var el = document.getElementById('modal' + key.charAt(0).toUpperCase() + key.slice(1));
        if (el && taxonomy[key]) {
          el.textContent = taxonomy[key];
        } else if (el) {
          el.textContent = '—';
        }
      });
      document.getElementById('modalTaxonomy').style.display = '';

      // 照片
      this._loadPhoto(s);
      document.getElementById('modalPhoto').style.display = '';

      // 图片来源链接
      var creditBar = document.getElementById('photoCreditBar');
      creditBar.href = s.creditUrl || '#';
      creditBar.style.display = '';
      var source = s.creditSource || 'iNaturalist';
      document.getElementById('creditBarZh').textContent = '图片来源：' + source;
      document.getElementById('creditBarEn').textContent = 'Photo via ' + source;
    } else {
      // 无物种：隐藏物种信息区，只留备忘
      document.getElementById('modalNameZh').textContent = '';
      document.getElementById('modalNameEn').textContent = '';
      document.getElementById('modalScientific').textContent = '';
      document.getElementById('modalScientific').style.display = 'none';
      document.getElementById('modalCategory').hidden = true;
      document.getElementById('modalTaxonomy').style.display = 'none';
      document.getElementById('modalPhoto').style.display = 'none';
      document.getElementById('photoCreditBar').style.display = 'none';
    }

    // 滚动到顶部
    this.card.scrollTop = 0;
  };

  /* ---- 加载照片（含降级处理） ---- */
  SpeciesModal.prototype._loadPhoto = function(s) {
    var img = document.getElementById('modalImg');

    img.src = s.photoPath;
    img.alt = s.nameZh + ' / ' + s.nameEn;

    // 图片加载失败则隐藏
    img.onerror = function() {
      img.style.display = 'none';
    };

    // 图片加载成功则显示
    img.onload = function() {
      img.style.display = '';
    };
  };

  /* ---- 焦点陷阱 ---- */
  SpeciesModal.prototype._trapFocus = function() {
    var self = this;
    // 先把焦点放到关闭按钮
    this.closeBtn.focus();

    // 获取弹窗中所有可聚焦元素
    var getFocusable = function() {
      return self.card.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    };

    this.card.addEventListener('keydown', function trapHandler(e) {
      if (e.key !== 'Tab') return;

      var focusable = getFocusable();
      if (focusable.length === 0) return;

      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }, { once: true }); // 每次打开弹窗重新绑定
  };

  /* ---- 绑定关闭事件 ---- */
  SpeciesModal.prototype._bindEvents = function() {
    var self = this;

    // X 按钮关闭
    this.closeBtn.addEventListener('click', function() {
      self.close();
    });

    // 点击遮罩层关闭
    this.overlay.addEventListener('click', function(e) {
      if (e.target === self.overlay) {
        self.close();
      }
    });

    // 按 Escape 关闭
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && self.isOpen) {
        self.close();
      }
    });

    // 自然日记事件
    this._bindJournalEvents();
  };

  /* ---- 自然日记功能 ---- */
  SpeciesModal.prototype._getJournalKey = function() {
    return 'cal-journal-' + (this._currentDate || '');
  };

  /* 加载日记 */
  SpeciesModal.prototype._loadJournal = function() {
    // 根据当前语言设置 placeholder
    var textarea = document.getElementById('journalTextarea');
    var isEn = !document.body.classList.contains('lang-zh');
    if (textarea) {
      textarea.placeholder = isEn
        ? textarea.getAttribute('data-placeholder-en')
        : textarea.getAttribute('data-placeholder-zh');
    }

    var content = '';
    try {
      var raw = localStorage.getItem(this._getJournalKey());
      if (raw) content = raw;
    } catch (e) {
      content = '';
    }

    // 填充 textarea 并更新字数
    if (textarea) {
      textarea.value = content;
    }
    this._updateCharCount();
  };

  /* 更新字数统计 */
  SpeciesModal.prototype._updateCharCount = function() {
    var textarea = document.getElementById('journalTextarea');
    var counter = document.getElementById('journalCharCount');
    if (textarea && counter) {
      var len = textarea.value.length;
      counter.textContent = len + ' / 200';
      if (len >= 200) {
        counter.classList.add('limit-reached');
      } else {
        counter.classList.remove('limit-reached');
      }
    }
  };

  /* 保存日记 */
  SpeciesModal.prototype._saveJournal = function() {
    var textarea = document.getElementById('journalTextarea');
    var content = textarea.value;

    // 200 字符硬性截断
    if (content.length > 200) {
      content = content.substring(0, 200);
      textarea.value = content;
    }

    try {
      localStorage.setItem(this._getJournalKey(), content);
    } catch (e) {
      // localStorage 不可用时静默失败
    }

    this._updateCharCount();

    // 保存反馈 — 按钮短暂变色
    var saveBtn = document.getElementById('journalSaveBtn');
    if (saveBtn) {
      saveBtn.classList.add('saved');
      var self = this;
      setTimeout(function() {
        saveBtn.classList.remove('saved');
      }, 1200);
    }
  };

  /* 绑定日记事件 */
  SpeciesModal.prototype._bindJournalEvents = function() {
    var self = this;

    var textarea = document.getElementById('journalTextarea');
    var saveBtn = document.getElementById('journalSaveBtn');

    // 实时字数统计
    if (textarea) {
      textarea.addEventListener('input', function() {
        // 硬性限制 200 字符
        if (this.value.length > 200) {
          this.value = this.value.substring(0, 200);
        }
        self._updateCharCount();
      });
    }

    // 保存按钮
    if (saveBtn) {
      saveBtn.addEventListener('click', function() {
        self._saveJournal();
      });
    }

    // Ctrl+S / Cmd+S 快捷键保存
    if (textarea) {
      textarea.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault();
          self._saveJournal();
        }
      });
    }
  };

  // 返回构造函数
  return SpeciesModal;
})();
