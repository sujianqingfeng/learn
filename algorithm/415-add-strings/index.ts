// 415: 字符串相加
export function addString(num1: string, num2: string) {
  const n = num1.length
  const m = num2.length
  const ans = []
  let add = 0

  for (let i = n - 1, j = m - 1; i >= 0 || j >= 0; i--, j--) {
    const n1 = +num1[i] || 0
    const n2 = +num2[j] || 0
    const t = n1 + n2 + add
    const c = t % 10

    ans.unshift(c)
    add = t > 9 ? 1 : 0
  }

  if (add > 0) {
    ans.unshift(add)
  }

  return ans.join('')
}
