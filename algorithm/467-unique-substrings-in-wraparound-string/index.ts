export function findSubstringInWraproundString(p: string) {
  const n = p.length;

  const dp = Array(26).fill(0);

  function getCode(s: string) {
    return s.charCodeAt(0);
  }

  let k = 0;
  const aCode = getCode("a");
  for (let i = 0; i < n; i++) {
    // 这里加 26 是为了变成正数 比如 a-z
    if (i > 0 && (getCode(p[i]) - getCode(p[i - 1]) + 26) % 26 === 1) {
      k++;
    } else {
      k = 1;
    }
    const index = getCode(p[i]) - aCode;

    dp[index] = Math.max(dp[index], k);
  }

  return dp.reduce((pre, cur) => pre + cur, 0);
}
