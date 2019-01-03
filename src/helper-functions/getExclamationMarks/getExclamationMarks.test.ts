import { getExclamationMarks } from './getExclamationMarks';

describe(getExclamationMarks, () => {
  test('returns a string', () => {
    expect(typeof (getExclamationMarks(1))).toBe('string');
  });

  test('returns a minimum string length of 1', () => {
    expect(getExclamationMarks(0).length).toBe(1);
  });

  test('the returned string has a length equal to the Number provided', () => {
    expect(getExclamationMarks(5).length).toBe(5);
  });

  test('any negative Numbers provided are converted to their absolute value', () => {
    expect(getExclamationMarks(-5).length).toBe(5);
  });

  test("the returned string contains only !'s", () => {
    const exclamationMarks = getExclamationMarks(Math.floor(Math.random() * 7) + 1);
    expect(
      exclamationMarks.split("").filter(character => character === '!').length
    ).toBe(exclamationMarks.length);
  });
});
