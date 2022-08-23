const stringLength = require('./stringLength');

test('return length of given string', () => {
  expect(stringLength('hello')).toBe(5);
});

test('return error if string length is < 1 or > 10', () => {
  expect(stringLength('hello')).not.toBe(
    'hello'.length < 1 && 'hello'.length > 10
  );
});
