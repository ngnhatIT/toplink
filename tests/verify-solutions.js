const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 4: Enterprise Solutions (solutions.html)...');

const solutionsPath = path.join(__dirname, '..', 'solutions.html');
assert(fs.existsSync(solutionsPath), 'solutions.html must exist');

const content = fs.readFileSync(solutionsPath, 'utf8');
const lower = content.toLowerCase();

assert(content.includes('<header') && content.includes('<footer'), 'Must include header and footer');
assert(lower.includes('tư vấn doanh nghiệp'), 'Must cover corporate consulting');
assert(lower.includes('kpi') || lower.includes('quản trị hiệu suất'), 'Must cover KPI and performance management');
assert(lower.includes('nhân sự') || lower.includes('hr'), 'Must cover HR solutions');
assert(lower.includes('trước khi') || lower.includes('sau khi') || lower.includes('hiệu quả'), 'Must show impact comparison');

console.log('✅ Task 4 tests passed successfully!');
