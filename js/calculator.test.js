const Calculator = require('./calculator');

describe('add function', () => {
  test('add', () => {
    expect(Calculator.add(2, 2)).toBe(4);
  });
  test('add', () => {
    expect(Calculator.add(85, 22)).toBe(107);
  });
  test('add', () => {
    expect(Calculator.add(20, 15)).toBe(35);
  });
});

describe('subtract function', () => {
  test('subtract', () => {
    expect(Calculator.subtract(5, 5)).toBe(0);
  });
  test('subtract', () => {
    expect(Calculator.subtract(66, 32)).toBe(34);
  });
  test('subtract', () => {
    expect(Calculator.subtract(88, 89)).toBe(-1);
  });
});

describe('divide function', () => {
  test('divide', () => {
    expect(Calculator.divide(9, 9)).toBe(1);
  });
  test('divide', () => {
    expect(Calculator.divide(14, 7)).toBe(2);
  });
  test('divide', () => {
    expect(Calculator.divide(90, 9)).toBe(10);
  });
});

describe('multiply function', () => {
  test('multiply', () => {
    expect(Calculator.multiply(14, 0)).toBe(0);
  });
  test('multiply', () => {
    expect(Calculator.multiply(5, 5)).toBe(25);
  });
  test('multiply', () => {
    expect(Calculator.multiply(12, 9)).toBe(108);
  });
});
