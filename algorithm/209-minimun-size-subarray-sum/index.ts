// 209. 长度最小的子数组
export function minSubArrayLen(target: number, nums: number[]) {
  let l = 0,
    r = 0
  const n = nums.length
  let res = n + 1
  let sum = 0

  // 先找出满足条件的r
  while (r < n) {
    sum += nums[r]
    if (sum >= target) {
      // 在缩短左边的l
      while (sum - nums[l] >= target) {
        sum -= nums[l]
        l++
      }
      // 比较长度
      res = Math.min(res, r - l + 1)
    }

    r++
  }
  // 如果都没有满足 返回0
  return res === n + 1 ? 0 : res
}
