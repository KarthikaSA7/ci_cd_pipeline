const { add } = require('../app');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 0 + 5 to equal 5', () => {
    expect(add(0, 5)).toBe(5);
});
