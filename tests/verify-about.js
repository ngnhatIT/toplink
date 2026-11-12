const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 3: About Us (about.html)...');

const aboutPath = path.join(__dirname, '..', 'about.html');
assert(fs.existsSync(aboutPath), 'about.html must exist');

const content = fs.readFileSync(aboutPath, 'utf8');

assert(content.includes('<header'), 'about.html must include <header>');
assert(content.includes('<footer'), 'about.html must include <footer>');

// Core philosophy & values
const lower = content.toLowerCase();
assert(lower.includes('hiệp lực kiến tạo') || lower.includes('co-creation'), 'Must explain Co-Creation philosophy');
assert(lower.includes('tầm nhìn') && lower.includes('sứ mệnh'), 'Must include Vision and Mission');
assert(lower.includes('giá trị cốt lõi'), 'Must include Core Values');

// Team & Advisory
assert(lower.includes('chuyên gia') || lower.includes('đội ngũ'), 'Must showcase Experts/Advisors');

console.log('✅ Task 3 tests passed successfully!');
