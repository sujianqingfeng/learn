// 136: 只出现一次的数字
export function singleNumber(nums: number[]) {
  // 异或操作
  // 任何 跟0异或就是当前值本身
  // 同值异或 会直接抵消
  let res = 0
  for (const num of nums) {
    res ^= num
  }
  return res
}
