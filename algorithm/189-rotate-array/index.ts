// 189. 轮转数组
export function rotate(nums: number[], k: number) {
  // 根据位置反转
  const reverse = (nums: number[], start: number, end: number) => {
    while (start <= end) {
      const temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }

    return nums
  }

  k = k % nums.length

  // 先全部反转
  reverse(nums, 0, nums.length - 1)
  // 前面部分
  reverse(nums, 0, k - 1)
  // 后面部分
  reverse(nums, k, nums.length - 1)
}
