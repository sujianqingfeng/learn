// 暴力
function longestPalindrome1(s: string) {
  let max = 1
  let begin = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      // 首先满足长度 同时是回文
      if (j - i + 1 > max && valid(s, i, j)) {
        max = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + max)
}

function valid(s: string, i: number, j: number) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

export const longestPalindrome = longestPalindrome1
