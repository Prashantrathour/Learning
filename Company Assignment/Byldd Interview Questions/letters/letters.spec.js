const assert = require('assert');
const letters = require('./letters');

describe('letters', function() {
  const alphabetWithoutFox = 'abcdeghijklmnpqrstuvwyz';

  it('works', function() {
    assert.strictEqual(letters('fox'), alphabetWithoutFox);
  });

  it('registers an uppercase letter', function() {
    assert.strictEqual(letters('foX'), alphabetWithoutFox);
  });

  it('ignores any numbers in the word', function() {
    assert.strictEqual(letters('fox2'), alphabetWithoutFox);
  });
});
