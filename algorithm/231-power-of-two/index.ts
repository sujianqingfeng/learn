//  2 的幂
export function isPowerOfTwo(n: number) {
  // 16 -> 10000
  // 15 ->  1111
  // 16 & 15 -> 00000
  // 按位与  1 1 -> 1  其他为0

  while (n > 0 && (n & (n - 1)) === 0) {
    return true
  }

  return false
}
