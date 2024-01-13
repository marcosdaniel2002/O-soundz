export function fancyDurationFormat(s = 71) {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}
