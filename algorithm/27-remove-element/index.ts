// 27. 移除元素
export function removeElement(nums: number[], val: number) {
  // slow 代表是不是val的数组的索引
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    // 在不是val的情况下，对nums进行重新赋值
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  return slow
}
