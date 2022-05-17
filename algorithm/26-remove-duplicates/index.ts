// 26. 删除有序数组中的重复项
export function removeDuplicates(nums: number[]) {
  let slow = 0,
    fast = 0

  // 遇到重复的就继续走 不重复的就赋值
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }

  return slow + 1
}
