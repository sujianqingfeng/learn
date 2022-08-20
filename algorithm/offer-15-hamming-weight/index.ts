// Offer 15. 二进制中1的个数
export function hammingWeight(n:number) {
  let ans = 0
  while (n) {
    ans++
    n = n & (n-1)
  }

  return ans
}
