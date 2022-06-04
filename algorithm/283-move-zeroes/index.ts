// 283. 移动零
export function moveZeroes(nums: number[]) {
  let j = 0

  // 双指针 遇到非0就进行交换
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      const temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
  }

  return nums
}
