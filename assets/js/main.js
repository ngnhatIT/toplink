/**
 * TOPLINKS - Core JavaScript Utilities
 * Handles navigation, mobile menu, toast notifications, quiz logic & accordions
 */

const ToplinksCore = {
  init() {
    this.initMobileMenu();
    this.initStickyHeader();
    this.initAccordion();
    this.initActiveNav();
    this.initLucideIcons();
    this.initYear();
  },

  initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-mobile-menu');

    if (!toggleBtn || !mobileMenu) return;

    toggleBtn.setAttribute('aria-controls', 'mobile-menu');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('role', 'dialog');
    mobileMenu.setAttribute('aria-modal', 'true');
    mobileMenu.setAttribute('aria-label', 'Menu điều hướng');

    const focusables = () => [...mobileMenu.querySelectorAll('a[href], button:not([disabled])')];
    const isOpen = () => !mobileMenu.classList.contains('hidden');

    const open = () => {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      (focusables()[1] || focusables()[0])?.focus(); // first nav link (index 0 is the close button)
    };
    const close = () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    };

    toggleBtn.addEventListener('click', () => (isOpen() ? close() : open()));
    if (closeBtn) closeBtn.addEventListener('click', close);

    // Close on backdrop click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) close();
    });

    // Esc closes; Tab stays inside the open drawer
    document.addEventListener('keydown', (e) => {
      if (!isOpen()) return;
      if (e.key === 'Escape') {
        close();
      } else if (e.key === 'Tab') {
        const items = focusables();
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  },

  initStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    // v2 pages style the scrolled state with .is-scrolled (hairline + soft shadow)
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  },

  initActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('[data-nav-link]');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        // Active styling lives in the HTML (brand navy + border); JS only exposes it to assistive tech
        link.setAttribute('aria-current', 'page');
      }
    });
  },

  initAccordion() {
    const accordions = document.querySelectorAll('[data-accordion-btn]');
    accordions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('[data-accordion-icon]');
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        btn.setAttribute('aria-expanded', !isExpanded);
        if (content) {
          content.classList.toggle('hidden');
        }
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      });
    });
  },

  initLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  },

  initYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  },

  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-md w-full px-4 pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    toast.className = `pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border transform transition-all duration-300 translate-y-4 opacity-0 ${
      isSuccess ? 'bg-[#153e4d] border-[#fbee41] text-white' : 'bg-red-900 border-red-500 text-white'
    }`;
    toast.setAttribute('role', isSuccess ? 'status' : 'alert');

    toast.innerHTML = `
      <div class="p-1 rounded-full ${isSuccess ? 'bg-[#fbee41]/20 text-[#fbee41]' : 'bg-red-500/20 text-red-400'}">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
            isSuccess ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'
          }"></path>
        </svg>
      </div>
      <div class="flex-1">
        <p class="text-sm font-semibold">${isSuccess ? 'Thông báo' : 'Lỗi'}</p>
        <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">${message}</p>
      </div>
      <button type="button" aria-label="Đóng thông báo" class="text-slate-400 hover:text-white" onclick="this.parentElement.remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    `;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    });

    // Auto dismiss after 4.5s
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
};

// top-level const is not a window property; pages check window.ToplinksCore before calling showToast
window.ToplinksCore = ToplinksCore;

document.addEventListener('DOMContentLoaded', () => {
  ToplinksCore.init();
});
