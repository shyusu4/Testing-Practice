const reverseString = require('./reverseString');

test('check if string is reversed', () => {
  expect(reverseString('rainbow')).toBe('wobniar');
});
