export function getExclamationMarks(numChars: number) {
  numChars = numChars || 1;
  return Array(Math.abs(numChars) + 1).join('!');
}
