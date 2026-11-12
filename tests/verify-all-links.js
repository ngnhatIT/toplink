const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 8: Navigation Integrity, Responsive & WCAG Checklist Audit...');

const pages = [
  'index.html',
  'about.html',
  'solutions.html',
  'training.html',
  'tools.html',
  'contact.html'
];

pages.forEach(page => {
  const filePath = path.join(__dirname, '..', page);
  assert(fs.existsSync(filePath), `${page} must exist`);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check responsive meta
  assert(content.includes('<meta name="viewport" content="width=device-width, initial-scale=1.0">'), `${page} must have proper responsive viewport meta`);

  // Check shared CSS & JS
  assert(content.includes('assets/css/style.css'), `${page} must link to style.css`);
  assert(content.includes('assets/js/main.js'), `${page} must link to main.js`);

  // Check links to all other pages
  pages.forEach(targetPage => {
    assert(content.includes(`href="${targetPage}"`) || (targetPage === 'index.html' && content.includes('href="index.html"')), `${page} must contain navigation link to ${targetPage}`);
  });

  // Check WCAG / ui-ux-pro-max checklist items:
  // 1. Mobile menu button must have aria-label
  assert(content.includes('aria-label="Mở menu"'), `${page} must have accessible mobile menu button`);
  // 2. Lucide script included
  assert(content.includes('lucide'), `${page} must use Lucide icons`);
});

console.log('✅ Task 8 tests passed successfully! All 6 pages are completely interlinked and compliant.');
