// 453. 最小操作次数使数组元素相等
export function minMoves(nums: number[]) {
  // 每次n-1个数加1
  // 相当于一个数减一
  // 先找到最小值
  const min = Math.min(...nums)

  let res = 0

  // 将每个数跟最小值的差值相加
  for (const num of nums) {
    res += num - min
  }

  return res
}
