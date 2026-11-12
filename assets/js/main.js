/**
 * TOPLINKS - Core JavaScript Utilities
 * Handles navigation, mobile menu, toast notifications, quiz logic & accordions
 */

const ToplinksCore = {
  init() {
    this.initMobileMenu();
    this.initStickyHeader();
    this.initAccordion();
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
      (mobileMenu.querySelector('nav a[href]') || focusables()[0])?.focus();
    };
    const close = () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    };

    toggleBtn.addEventListener('click', () => (isOpen() ? close() : open()));
    if (closeBtn) closeBtn.addEventListener('click', close);

    // Close on backdrop click, and on any drawer link (same-page #hash links do not reload)
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu || e.target.closest('a[href]')) close();
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
        // focus outside the drawer (e.g. on body after a click) is pulled back in
        const outside = !mobileMenu.contains(document.activeElement);
        if (e.shiftKey && (outside || document.activeElement === first)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (outside || document.activeElement === last)) {
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
      document.body.appendChild(container);
    }

    // Styling lives in v2.css (#toast-container …); only .opacity-0 and .flex-1 are hooks
    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    toast.className = 'opacity-0';
    toast.setAttribute('role', isSuccess ? 'status' : 'alert');

    toast.innerHTML = `
      <div>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
            isSuccess ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'
          }"></path>
        </svg>
      </div>
      <div class="flex-1">
        <p>${isSuccess ? 'Thông báo' : 'Lỗi'}</p>
        <p></p>
      </div>
      <button type="button" aria-label="Đóng thông báo" onclick="this.parentElement.remove()">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    `;
    // textContent, not innerHTML: message may carry user-derived text
    toast.querySelector('.flex-1 p + p').textContent = message;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('opacity-0');
    });

    // Auto dismiss after 4.5s
    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
};

// top-level const is not a window property; pages check window.ToplinksCore before calling showToast
window.ToplinksCore = ToplinksCore;

document.addEventListener('DOMContentLoaded', () => {
  ToplinksCore.init();
});
