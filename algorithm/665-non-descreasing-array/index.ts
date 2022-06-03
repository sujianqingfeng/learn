// 665. 非递减数列
export function checkPossibility(nums: number[]) {
  let sum = 0

  for (let i = 1; i < nums.length; i++) {
    // 拐点存在
    if (nums[i - 1] > nums[i]) {
      sum++
      // 超过次数直接返回
      if (sum >= 2) {
        return false
      }

      // i-2 i-1 i
      // 拐点前的位置  拐点  拐点后面的位置
      if (i - 2 >= 0) {
        // 拐点前的数 小于  观点后的数 直接让拐点下移
        if (nums[i - 2] <= nums[i]) {
          nums[i - 1] = nums[i]
        } else {
          // 拐点前的数 大于 拐点后的数  直接让拐点后面的数上移
          nums[i] = nums[i - 1]
        }
      } else {
        // 如果位数不够 直接让第一个数 下移
        nums[i - 1] = nums[i]
      }
    }
  }

  return true
}
