// 326. 3 的幂
export function isPowerThree(n: number) {
  if (0 >= n) return false
  while (n % 3 === 0) {
    n = n / 3
  }
  return n === 1
}
