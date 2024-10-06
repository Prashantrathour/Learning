### Letters

Write a function that takes a word and returns all the lowercase letters in the alphabet
that were not in the word as an array

Test the program by running **npm run test-letters**

### Example 1

```javascript
  const word = 'abc';

  letters(word) // => 'defghijkmnopqrstuvwxyz'.split('')
```

### Example 2

```javascript
  const word = 'can';

  letters(word) // => 'bdefghijklmopqrstuvwxyz'.split('')
```