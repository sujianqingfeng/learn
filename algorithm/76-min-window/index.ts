// 最小覆盖子串
export function minWindow(s: string, t: string) {
  const need: Record<string, number> = {}
  let size = Number.MAX_VALUE
  let i = 0,
    j = 0,
    needCount = t.length,
    start = 0

  for (const s of t) {
    need[s] = need[s] === undefined ? 1 : need[s] + 1
  }

  // 先找最右
  while (j < s.length) {
    const c = s[j]

    // 只有是t当中才会 -1
    if (need[c] > 0) {
      needCount--
    }
    // 存储每个字符需要的数量
    need[c] = need[c] === undefined ? -1 : need[c] - 1

    if (needCount === 0) {
      // 缩小左边
      while (i < j && need[s[i]] < 0) {
        need[s[i]]++
        i++
      }

      // 存储当前最小长度
      if (j - i + 1 < size) {
        size = j - i + 1
        start = i
      }

      // 左边移动一位 重新开始新的满足条件
      need[s[i]]++
      i++
      needCount++
    }

    j++
  }

  return size === Number.MAX_VALUE ? '' : s.substring(start, start + size)
}
