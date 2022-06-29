export function findTheDifference(s: string, t: string) {
  const res = Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (const c of s) {
    res[c.charCodeAt(0) - aCode]++;
  }

  for (const c of t) {
    res[c.charCodeAt(0) - aCode]--;

    if (res[c.charCodeAt(0) - aCode] < 0) {
      return c;
    }
  }
}
