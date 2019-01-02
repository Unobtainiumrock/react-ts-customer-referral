export function getExclamationMarks(numChars: number): String {
  numChars = numChars || 1;
  return Array(Math.abs(numChars) + 1).join('!');
}
