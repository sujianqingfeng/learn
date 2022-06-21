// 125. 验证回文串
export function isPalindrome(s: string) {
  // [^ABC]	 匹配除了 [...] 中字符的所有字符
  s = s.replace(/[^a-zA-z0-9]/g, "").toLowerCase()
  let i = 0,
    j = s.length - 1

  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }

    i++
    j--
  }
  return true
}
