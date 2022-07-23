//521. 最长特殊序列 Ⅰ
export function findUSlength(a: string, b: string) {
  return a === b ? -1 : Math.max(a.length, b.length)
}
