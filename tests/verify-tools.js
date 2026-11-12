const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Task 6: Assessment Tools (tools.html)...');

const toolsPath = path.join(__dirname, '..', 'tools.html');
assert(fs.existsSync(toolsPath), 'tools.html must exist');

const content = fs.readFileSync(toolsPath, 'utf8');
const lower = content.toLowerCase();

assert(content.includes('<header') && content.includes('<footer'), 'Must include header and footer');
assert(lower.includes('sinh trắc vân tay') || lower.includes('stvt'), 'Must include Dermatoglyphics STVT');
assert(lower.includes('mbti'), 'Must include MBTI assessment');
assert(lower.includes('disc'), 'Must include DISC assessment');
assert(content.includes('id="assessment-widget"'), 'Must have interactive assessment widget element');

console.log('✅ Task 6 tests passed successfully!');
