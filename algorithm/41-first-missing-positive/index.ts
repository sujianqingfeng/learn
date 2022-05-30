// 41. 缺失的第一个正数
export function firstMissingPositive(nums: number[]) {
  // 先判断1 在不在里面 不在直接就找到结果
  if (nums.indexOf(1) === -1) {
    return 1
  }

  const n = nums.length

  // 把不满足正整数 或者超过数组长的的数 清洗一下 清洗结果为1 因为在上面已经排除过1了
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (num <= 0 || num > n) {
      nums[i] = 1
    }
  }

  // 按照
  // [1,n]
  // [0,n-1]
  // 的关系进行标记
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i])
    nums[num - 1] = -Math.abs(nums[num - 1])
  }

  // 遍历 找到正数代表下一位必定是缺失的数
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (num > 0) {
      return i + 1
    }
  }
  // 没有找到 代表之前的数都连续的整数  直接加一位
  return n + 1
}
