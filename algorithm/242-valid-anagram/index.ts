//242. 有效的字母异位词
export function isAnagram(s: string, t: string) {
  if (s.length !== t.length) {
    return false
  }

  // codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。
  const res = Array(26).fill(0)
  const aCode = 'a'.codePointAt(0)!

  for (const ch of s) {
    res[ch.codePointAt(0)! - aCode]++
  }

  for (const ch of t) {
    const index = ch.codePointAt(0)! - aCode
    res[index]--

    if (res[index] < 0) {
      return false
    }
  }
  return true
}
