const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 1: Shared Core Foundation & Assets...');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
const jsPath = path.join(__dirname, '..', 'assets', 'js', 'main.js');

assert(fs.existsSync(cssPath), 'style.css must exist');
const cssContent = fs.readFileSync(cssPath, 'utf8');
assert(cssContent.includes('--color-primary'), 'style.css must define --color-primary');
assert(cssContent.includes('--color-accent'), 'style.css must define --color-accent');
assert(cssContent.includes('Poppins'), 'style.css must include Poppins font');
assert(cssContent.includes('Plus Jakarta Sans'), 'style.css must include Plus Jakarta Sans font');

assert(fs.existsSync(jsPath), 'main.js must exist');
const jsContent = fs.readFileSync(jsPath, 'utf8');
assert(jsContent.includes('ToplinksCore'), 'main.js must define ToplinksCore object');
assert(jsContent.includes('initMobileMenu'), 'main.js must implement initMobileMenu');
assert(jsContent.includes('showToast'), 'main.js must implement showToast');

console.log('✅ Task 1 tests passed successfully!');
