import add from '../src/js/utils/add';
const test = require('tape');
const addition = new add();

test('This is just a test', function (t: any) {
    t.plan(1);

    t.equal(addition.add(2, 5), 7, '-- 2 + 5 is equal 7');

    t.end();
});
