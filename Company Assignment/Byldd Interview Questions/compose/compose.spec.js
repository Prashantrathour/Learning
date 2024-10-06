const assert = require('assert');
const compose = require('./compose');
describe('compose', function() {
  it('works', function() {
    const funcs = [
      (val) => val + 1,
      (val) => val * 4,
      (val) => val - 4
    ]

    assert.strictEqual(compose(funcs)(4), 16);
  });

  it('handles one function', function() {
    const func = val => val + 1;

    assert.strictEqual(compose(func)(4), 5);
  });
});
