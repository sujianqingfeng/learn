// 696. 计数二进制子串
export function countBinarySubstrings(s: string) {
  const n = s.length;
  let i = 0;
  let cnt = 0;
  let ans = 0;

  while (i < n) {
    const ch = s[i];

    let j = i;
    while (j < n && ch === s[j]) {
      j++;
    }

    const count = j - i;
    ans += Math.min(count, cnt);
    cnt = count;
    i = j;
  }

  return ans;
}
