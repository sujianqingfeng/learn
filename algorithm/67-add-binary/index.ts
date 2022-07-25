// 67. 二进制求和
export function addBinary(a: string, b: string) {
  const n = a.length
  const m = b.length
  let add = 0
  const ans = []

  for (let i = n - 1, j = m - 1; i >= 0 || j >= 0; i--, j--) {
    const num1 = +a[i] || 0
    const num2 = +b[j] || 0

    const r = num1 ^ num2 ^ add
    ans.unshift(r)
    add = num1 + num2 + add > 1 ? 1 : 0
  }

  if (add > 0) {
    ans.unshift(1)
  }

  return ans.join("")
}
