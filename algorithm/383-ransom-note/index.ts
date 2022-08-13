// 383. 赎金信
export function canConstruct(ransomNote: string, magazine: string) {
  // 因为magzine 只能使用一次 所以可以先特判
  if (ransomNote.length > magazine.length) {
    return false
  }

  const res = Array(26).fill(0)
  const aCode = 'a'.charCodeAt(0)

  for (const ch of magazine) {
    res[ch.charCodeAt(0) - aCode]++
  }

  for (const ch of ransomNote) {
    res[ch.charCodeAt(0) - aCode]--

    if (res[ch.charCodeAt(0) - aCode] < 0) {
      return false
    }
  }

  return true
}
