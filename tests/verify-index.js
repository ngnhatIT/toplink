const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 2: Homepage (index.html)...');

const indexPath = path.join(__dirname, '..', 'index.html');
assert(fs.existsSync(indexPath), 'index.html must exist');

const content = fs.readFileSync(indexPath, 'utf8');

// Semantic structure
assert(content.includes('<header'), 'index.html must include <header>');
assert(content.includes('<main'), 'index.html must include <main>');
assert(content.includes('<footer'), 'index.html must include <footer>');

// Brand Slogan & Positioning
assert(content.includes('Co-Creation for Success') || content.includes('CO-CREATION FOR SUCCESS'), 'Must contain Co-Creation for Success slogan');
assert(content.includes('Hiệp lực kiến tạo'), 'Must contain Vietnamese translation Hiệp lực kiến tạo');

// Social proof & badges
assert(content.includes('100+') || content.includes('+100'), 'Must include +100 businesses badge or metric');
assert(content.includes('Tư vấn doanh nghiệp') || content.includes('Tư vấn Doanh nghiệp'), 'Must include Corporate Consulting solution');
assert(content.includes('Đào tạo') || content.includes('ĐÀO TẠO'), 'Must include Training solution');

// Internal links check
assert(content.includes('href="about.html"'), 'Must link to about.html');
assert(content.includes('href="solutions.html"'), 'Must link to solutions.html');
assert(content.includes('href="training.html"'), 'Must link to training.html');
assert(content.includes('href="tools.html"'), 'Must link to tools.html');
assert(content.includes('href="contact.html"'), 'Must link to contact.html');

console.log('✅ Task 2 tests passed successfully!');
