// 628. 三个数的最大乘积
export function maximumProduct(nums: number[]) {
  nums = nums.sort((a, b) => a - b)

  const n = nums.length

  // 全是正数 或者 负数 都是三个最大的数 乘积最大
  // 有正有负 有可能是两个负数 * 最大的数 为最大
  return Math.max(
    nums[0] * nums[1] * nums[n - 1],
    nums[n - 1] * nums[n - 2] * nums[n - 3]
  )
}
