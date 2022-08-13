export function isMatch(s: string, p: string) {
  if (s === null || p === null) { return false }

  const sn = s.length,
    pn = p.length

  // +1 是因为增加''

  // dp[i][j] s在i 和 p在 j 的匹配状态
  const dp = new Array(sn + 1)
  for (let i = 0; i < sn + 1; i++) {
    dp[i] = new Array(pn + 1).fill(false)
  }

  dp[0][0] = true

  // 第一行 字符为空的时候
  for (let j = 1; j < pn + 1; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }

  for (let i = 1; i < sn + 1; i++) {
    for (let j = 1; j < pn + 1; j++) {
      // 这里i-1 j-1的原因 是因为增加了 ''
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        // 状态取决于 上一个匹配状态
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        // 这里右三种情况 匹配0次 1次  多次 只要满足一个就可以

        // 匹配一次
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // dp[i][j] = 0次 || 1次 || 多次
          dp[i][j] = dp[i][j - 2] || dp[i][j - 1] || dp[i - 1][j]
        } else {
          // 相当于匹配0次 看之前能不能匹配
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[sn][pn]
}
