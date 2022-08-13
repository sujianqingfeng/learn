// 43. 字符串相乘
export function multiply(num1: string, num2: string) {
  if (num1 === '0' || num2 === '0') { return '0' }
  const n = num1.length
  const m = num2.length

  const ans = Array(n + m).fill(0)

  for (let i = n - 1; i >= 0; i--) {
    const n1 = +num1[i]
    for (let j = m - 1; j >= 0; j--) {
      const n2 = +num2[j]
      const t = n1 * n2
      const sum = ans[i + j + 1] + t
      ans[i + j + 1] = sum % 10
      ans[i + j] += Math.floor(sum / 10)
    }
  }

  let t
  while ((t = ans.shift()) !== 0) {
    ans.unshift(t)
    break
  }

  return ans.join('')
}
