// 481 神奇字符串
export function magicalString(n: number) {
  const s = [1, 2, 2]

  let c = 2
  while (s.length < n) {
    // 因为 1 2 1 2 11 22 交替连续进行 1 => 2  2=>1
    // 同时包含个数
    // 如果是2 下一位就是1 因为是2 所以是11
    const t = c % 2 === 0 ? 1 : 2
    if (s[c] === 1) {
      s.push(t)
    } else {
      s.push(t, t)
    }
    c++
  }

  let ans = 0

  for (let i = 0; i < n; i++) {
    if (s[i] === 1) {
      ans++
    }
  }

  return ans
}
