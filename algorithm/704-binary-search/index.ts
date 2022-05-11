export function search(nums: number[], target: number) {
  const n = nums.length

  let l = 0,
    r = n

  // 注意这里的区间  一开始r为数组的长度
  while (l < r) {
    // 取整
    const a = ~~((r - l) / 2)
    const m = l + a
    const t = nums[m]
    // console.log("l", l, "r", r, "a", a, "m", m, "t", t)

    // 向左找
    if (t > target) {
      r = m
    } else if (t < target) {
      // 向右找
      l = m + 1
    } else {
      return m
    }
  }

  return -1
}
