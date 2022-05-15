// 977. 有序数组的平方
export function sortedSquares(nums: number[]) {
  // 双指针 通过左右两边平方 确定最大值
  // 最大值 从新数组最后的位置开始设置
  let i = 0,
    j = nums.length - 1,
    k = j
  const res = new Array(j + 1)

  while (i <= j) {
    const iR = Math.pow(nums[i], 2)
    const jR = Math.pow(nums[j], 2)
    if (iR < jR) {
      res[k] = jR
      j--
    } else {
      res[k] = iR
      i++
    }
    k--
  }

  return res
}
