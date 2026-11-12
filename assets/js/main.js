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

    const toggle = () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      } else {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    };

    toggleBtn.addEventListener('click', toggle);
    if (closeBtn) closeBtn.addEventListener('click', toggle);

    // Close on backdrop click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        toggle();
      }
    });
  },

  initStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
        header.classList.remove('bg-white');
      } else {
        header.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
        header.classList.add('bg-white');
      }
    });
  },

  initActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('[data-nav-link]');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('text-sky-600', 'font-semibold');
        link.classList.remove('text-slate-600', 'text-slate-700');
        // Add subtle active indicator if desktop
        if (link.dataset.navLink === 'desktop') {
          const indicator = document.createElement('span');
          indicator.className = 'absolute -bottom-1 left-0 w-full h-0.5 bg-sky-600 rounded-full';
          link.classList.add('relative');
          link.appendChild(indicator);
        }
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
      isSuccess ? 'bg-slate-900 border-sky-500 text-white' : 'bg-red-900 border-red-500 text-white'
    }`;

    toast.innerHTML = `
      <div class="p-1 rounded-full ${isSuccess ? 'bg-sky-500/20 text-sky-400' : 'bg-red-500/20 text-red-400'}">
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
      <button class="text-slate-400 hover:text-white" onclick="this.parentElement.remove()">
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

document.addEventListener('DOMContentLoaded', () => {
  ToplinksCore.init();
});
