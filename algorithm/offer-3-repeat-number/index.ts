// 剑指 Offer 03. 数组中重复的数字
export function findRepeatNumber(nums: number[]) {
  const n = nums.length

  let i = 0
  while (i < n) {
    if (nums[i] === i) {
      i++
      continue
    }

    if (nums[i] === nums[nums[i]]) {
      return nums[i]
    }

    // 交换 这里有一个细节
    // 后面使用的是temp temp先前记录 不会变
    const temp = nums[i]
    nums[i] = nums[temp]
    nums[temp] = temp
  }
  return -1
}
