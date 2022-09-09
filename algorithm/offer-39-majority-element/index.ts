// 数组中出现次数超过一半的数字 
export function majorityElement(nums:number[]) {
  let candidate = nums[0]
  let total = 1

  for (const num of nums) {
    if (candidate === num) {
      total++
    } else {
      total--
      if (total===0) {
        candidate = num
        total = 1
      }
    }
  }
 
  return candidate
}