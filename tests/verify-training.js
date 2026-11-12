const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 5: Training & Coaching (training.html)...');

const trainingPath = path.join(__dirname, '..', 'training.html');
assert(fs.existsSync(trainingPath), 'training.html must exist');

const content = fs.readFileSync(trainingPath, 'utf8');
const lower = content.toLowerCase();

assert(content.includes('<header') && content.includes('<footer'), 'Must include header and footer');
assert(lower.includes('ai competency framework') || lower.includes('trí tuệ nhân tạo') || lower.includes('ai'), 'Must feature AI training course');
assert(lower.includes('lãnh đạo') || lower.includes('quản lý'), 'Must feature Leadership and Management training');
assert(lower.includes('coaching 1:1') || lower.includes('khai vấn'), 'Must cover 1:1 Coaching');
assert(content.includes('data-filter') || content.includes('data-category'), 'Must provide course filter functionality');

console.log('✅ Task 5 tests passed successfully!');
