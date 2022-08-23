const capitalize = require('./capitalize');

test('check if first character is capitalized', () => {
  expect(capitalize('letter')).toEqual('Letter');
});
