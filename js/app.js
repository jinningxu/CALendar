/* ============================================================
   app.js — 应用初始化与粘合逻辑
   负责: 模块实例化 · 事件绑定 · 语言切换 · 键盘导航 · 图片全局降级
   依赖: data.js → calendar.js → modal.js
   ============================================================ */

(function() {
  'use strict';

  // ==========================================
  // 1. 初始化模块
  // ==========================================
  var calendar = null;
  var modal = null;

  function init() {
    calendar = new Calendar();
    modal = new SpeciesModal();

    // 恢复语言偏好
    restoreLanguage();

    // 首次渲染
    calendar.render();

    // 绑定所有事件
    bindNavButtons();
    bindCalendarClicks();
    bindKeyboardNav();
    bindLanguageSwitch();
    bindIdeasPanel();
    bindGuidePanel();
    bindGlobalImageFallback();
  }

  // ==========================================
  // 2. 导航按钮
  // ==========================================
  function bindNavButtons() {
    document.getElementById('btnPrev').addEventListener('click', function() {
      calendar.goToPrevMonth();
    });

    document.getElementById('btnNext').addEventListener('click', function() {
      calendar.goToNextMonth();
    });

    document.getElementById('btnToday').addEventListener('click', function() {
      calendar.goToToday();
    });
  }

  // ==========================================
  // 3. 日历网格点击 (事件代理)
  // ==========================================
  function bindCalendarClicks() {
    var grid = document.getElementById('calendarGrid');

    grid.addEventListener('click', function(e) {
      // 找到被点击的日期单元格
      var cell = e.target.closest('.cal-cell');
      if (!cell) return;

      // 不响应补位日的点击
      if (cell.classList.contains('padding-day')) return;

      var dateStr = cell.getAttribute('data-date');
      if (!dateStr) return;

      // 打开弹窗（传入日期，modal 会自行查找物种和备忘）
      modal.open(dateStr);
    });

    // 键盘激活 (Enter / Space)
    grid.addEventListener('keydown', function(e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;

      var cell = e.target.closest('.cal-cell');
      if (!cell || cell.classList.contains('padding-day')) return;

      e.preventDefault();
      cell.click();
    });
  }

  // ==========================================
  // 4. 键盘导航 (左右箭头切换月份)
  // ==========================================
  function bindKeyboardNav() {
    document.addEventListener('keydown', function(e) {
      // 弹窗打开时不响应日历键盘导航
      if (modal && modal.isOpen) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        calendar.goToPrevMonth();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        calendar.goToNextMonth();
      }
    });
  }

  // ==========================================
  // 5. 语言切换
  // ==========================================
  function bindLanguageSwitch() {
    var langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');

        // 更新按钮状态
        langBtns.forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        // 切换 body 类 (驱动 CSS 显隐)
        if (lang === 'zh') {
          document.body.classList.add('lang-zh');
          document.documentElement.lang = 'zh-CN';
        } else {
          document.body.classList.remove('lang-zh');
          document.documentElement.lang = 'en';
        }

        // 持久化偏好
        try {
          localStorage.setItem('cal-pref-lang', lang);
        } catch (e) {
          // localStorage 不可用时静默失败
        }

        // 同步更新日记输入框 placeholder
        var journalTextarea = document.getElementById('journalTextarea');
        if (journalTextarea) {
          journalTextarea.placeholder = (lang === 'en')
            ? journalTextarea.getAttribute('data-placeholder-en')
            : journalTextarea.getAttribute('data-placeholder-zh');
        }

      });
    });
  }

  /* ---- 建站想法弹窗 ---- */
  function bindIdeasPanel() {
    var entryBtn = document.getElementById('ideasEntryBtn');
    var overlay = document.getElementById('ideasOverlay');
    var closeBtn = document.getElementById('ideasClose');

    if (!entryBtn || !overlay) return;

    // 打开弹窗
    entryBtn.addEventListener('click', function() {
      overlay.hidden = false;
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          overlay.classList.add('open');
        });
      });
      document.body.style.overflow = 'hidden';
    });

    // 关闭弹窗
    function closeIdeas() {
      overlay.classList.remove('open');
      setTimeout(function() {
        overlay.hidden = true;
        document.body.style.overflow = '';
      }, 250);
    }

    closeBtn.addEventListener('click', closeIdeas);

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeIdeas();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !overlay.hidden && overlay.classList.contains('open')) {
        closeIdeas();
      }
    });
  }

  /* ---- 使用指南弹窗 ---- */
  function bindGuidePanel() {
    var entryBtn = document.getElementById('guideEntryBtn');
    var overlay = document.getElementById('guideOverlay');
    var closeBtn = document.getElementById('guideClose');

    if (!entryBtn || !overlay) return;

    entryBtn.addEventListener('click', function() {
      overlay.hidden = false;
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          overlay.classList.add('open');
        });
      });
      document.body.style.overflow = 'hidden';
    });

    function closeGuide() {
      overlay.classList.remove('open');
      setTimeout(function() {
        overlay.hidden = true;
        document.body.style.overflow = '';
      }, 250);
    }

    closeBtn.addEventListener('click', closeGuide);

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeGuide();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !overlay.hidden && overlay.classList.contains('open')) {
        closeGuide();
      }
    });
  }

  /* ---- 恢复语言偏好 ---- */
  function restoreLanguage() {
    var savedLang = null;
    try {
      savedLang = localStorage.getItem('cal-pref-lang');
    } catch (e) {
      // localStorage 不可用
    }

    if (savedLang === 'zh') {
      var zhBtn = document.querySelector('.lang-btn[data-lang="zh"]');
      if (zhBtn) zhBtn.click();
    }
  }

  // ==========================================
  // 6. 全局图片降级处理
  // ==========================================
  function bindGlobalImageFallback() {
    document.addEventListener('error', function(e) {
      var target = e.target;
      if (target && target.tagName === 'IMG') {
        // 如果图片加载失败，显示占位符
        // 注意：modal 中的图片已在 modal.js 中单独处理
        // 这里处理 hero 背景图等情况
        if (target.id === 'modalImg') return; // modal 自行处理

        // 其他图片的通用降级
        target.style.display = 'none';
        var placeholder = document.createElement('div');
        placeholder.className = 'img-placeholder';
        placeholder.style.width = target.width || '100%';
        placeholder.style.height = target.height || '200px';
        placeholder.innerHTML = '<span class="placeholder-icon">📷</span>';

        if (target.parentNode) {
          target.parentNode.insertBefore(placeholder, target);
        }
      }
    }, true); // 使用捕获阶段
  }

  // ==========================================
  // 7. 启动
  // ==========================================
  // 等待 DOM 和所有脚本加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
