// 485. 最大连续 1 的个数
export function findMaxConsecutiveOnes(nums: number[]) {
  const target = 1

  const n = nums.length
  let res = 0,
    l = 0,
    r = 0

  while (l < n && r < n) {
    // 两个满足就计算
    if (nums[l] === target && nums[r] === target) {
      res = Math.max(res, r - l + 1)
    } else {
      // 不满足 就重新开始
      l = r + 1
    }
    r++
  }

  return res
}
