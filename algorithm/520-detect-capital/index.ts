const isLower = (c: string) => {
  return c >= "a" && c <= "z"
}
// 520. 检测大写字母
export function detectCapitalUse(word: string) {
  if (word.toUpperCase() === word) return true
  if (word.toLowerCase() === word) return true

  const n = word.length
  let idx = 1

  // 如果第一个是大写 就判断后面是否全是小写
  if (!isLower(word.charAt(0))) {
    while (idx < n && isLower(word.charAt(idx))) {
      idx++
    }
  }
  return n === idx
}
