export function fancyDurationFormat(s = 71) {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
