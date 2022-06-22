// 字符串中的单词数
export function countSegments(s: string) {
  let last = " ",
    ans = 0

  for (const c of s) {
    if (c === " " && last !== " ") {
      ans++
    }
    last = c
  }

  return last === " " ? ans : ans + 1
}
