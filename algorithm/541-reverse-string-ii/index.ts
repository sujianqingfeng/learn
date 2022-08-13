// 541. 反转字符串 II
export function reverseStr(s: string, k: number) {
  const reverse = (s: string[], start: number, end: number) => {
    while (start <= end) {
      const temp = s[start]
      s[start] = s[end]
      s[end] = temp
      start++
      end--
    }
  }

  const k2 = 2 * k
  const arr = [...s]
  const n = arr.length

  for (let i = 0; i < n; i = i + k2) {
    // i + k 可能会超过n  代表第一个规则 生效
    // 其余都是第二种规则 反转前k个字符串
    reverse(arr, i, Math.min(i + k, n) - 1)
  }

  return arr.join('')
}
