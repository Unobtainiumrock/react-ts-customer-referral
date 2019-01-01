export function getExclamationMarks(numChars: number) {
  return Array(Math.abs(numChars) + 1).join('!');
}
