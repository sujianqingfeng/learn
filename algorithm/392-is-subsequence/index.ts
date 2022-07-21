// 392. 判断子序列
export function isSubsequence(s: string, t: string) {
  const n = s.length
  const m = t.length

  // 双指针
  let i = 0,
    j = 0

  while (i < n && j < m) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === n
}
