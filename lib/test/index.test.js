import { sum, subtract } from '../src'; // using the ES6 modules

test('add 3 + 4 should equals 7', () => {
  expect(sum(3, 4)).toBe(7);
});

test('subtract 3 - 4 should equals -1', () => {
  expect(subtract(3, 4)).toBe(-1);
});

test('subtract 3 - 5 should equals -2', () => {
  expect(subtract(3, 5)).toBe(-2);
});
