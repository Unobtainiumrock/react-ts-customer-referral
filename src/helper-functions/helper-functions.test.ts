import { getExclamationMarks } from './helper-functions';

test('returns a typeof String', () => {
  expect(typeof (getExclamationMarks(1))).toBe('string');
});

test('returns a default String length of 1', () => {
  expect(getExclamationMarks(0).length).toBe(1);
});

test('returns a String length equal to the Number provided', () => {
  expect(getExclamationMarks(5).length).toBe(5);
})

test("the returned String contains only !'s", () => {
  const exclamationMarks = getExclamationMarks(Math.floor(Math.random() * 7) + 1);
  expect(
    exclamationMarks.split("").filter(character => character === '!').length
  ).toBe(exclamationMarks.length);
});
