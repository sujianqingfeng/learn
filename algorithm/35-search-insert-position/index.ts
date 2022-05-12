// 35. 搜索插入位置
export function searchInsert(nums: number[], target: number) {
  const n = nums.length
  let l = 0,
    r = n

  // 注意区间 r 为 nums的长度，重点是长度
  while (l < r) {
    // 取中间的索引
    const m = l + ~~((r - l) / 2)
    const t = nums[m]
    // 值大就往左边找   值小就往右边找  相等直接返回
    if (t > target) {
      r = m
    } else if (t < target) {
      l = m + 1
    } else {
      return m
    }
  }

  // 没有找到
  // l m 都可以 因为两个重合了
  return l
}
