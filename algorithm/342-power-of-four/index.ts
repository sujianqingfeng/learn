// 342. 4的幂
export function isPowerOfFour(n: number) {
  if (n <= 0) return false

  const ans = ~~Math.sqrt(n)

  if (ans * ans === n && (ans & (ans - 1)) === 0) {
    return true
  }
  return false
}
