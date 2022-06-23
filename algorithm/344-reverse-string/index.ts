//344. 反转字符串
export function reverseString(s: string[]) {
  const n = s.length
  let i = 0,
    j = n - 1

  while (i <= j) {
    const t = s[i]
    s[i] = s[j]
    s[j] = t

    i++
    j--
  }
}
