// 443. 压缩字符串
export function compress(chars: string[]) {
  const n = chars.length
  let left = 0,
    len = 0

  for (let i = 0; i < n; i++) {
    if (i === n - 1 || chars[i] !== chars[i + 1]) {
      // 先写字符
      chars[len] = chars[i]
      // 往后移动一位 可能是字符 可能是先前字符的数字
      len++
      const nums = i - left + 1
      // 先前字符的数量
      if (nums > 1) {
        for (const s of String(nums)) {
          chars[len] = s
          len++
        }
      }
      // 重置计算count的位置
      left = i + 1
    }
  }

  return len
}
