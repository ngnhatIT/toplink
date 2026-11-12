const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 7: Contact & Consultation (contact.html)...');

const contactPath = path.join(__dirname, '..', 'contact.html');
assert(fs.existsSync(contactPath), 'contact.html must exist');

const content = fs.readFileSync(contactPath, 'utf8');
const lower = content.toLowerCase();

assert(content.includes('<header') && content.includes('<footer'), 'Must include header and footer');
assert(content.includes('<form') && content.includes('id="consultation-form"'), 'Must include smart consultation form');
assert(lower.includes('info@toplinks.vn') || lower.includes('academy@toplinks.vn'), 'Must include email address');
assert(lower.includes('hà nội') || lower.includes('văn phòng'), 'Must include office info');
assert(content.includes('data-accordion-btn'), 'Must include FAQ accordion items');

console.log('✅ Task 7 tests passed successfully!');
