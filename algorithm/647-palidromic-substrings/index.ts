// 647. 回文子串
export function countSubstring(s: string) {
  const n = s.length

  let ans = 0
  for (let i = 0; i < 2 * n - 1; i++) {
    let l = i / 2,
      r = i / 2 + (i % 2)

    // s.charAt(l) 会直接取整
    while (0 <= l && r < n && s.charAt(l) === s.charAt(r)) {
      l--
      r++
      ans++
    }
  }

  return ans
}
