// 34. 在排序数组中查找元素的第一个和最后一个位置
export function searchRange(nums: number[], target: number) {
  const n = nums.length

  function left() {
    let l = 0,
      r = n

    while (l < r) {
      const m = l + ~~((r - l) / 2)

      if (nums[m] > target) {
        r = m
      } else if (nums[m] < target) {
        l = m + 1
      } else {
        r = m
      }
    }

    // 出界情况 l在最后边
    if (l >= n || target !== nums[l]) {
      return -1
    }

    return l
  }

  function right() {
    let l = 0,
      r = n

    while (l < r) {
      const m = l + ~~((r - l) / 2)

      if (nums[m] > target) {
        r = m
      } else if (nums[m] < target) {
        l = m + 1
      } else {
        l = m + 1
      }
    }

    // 出界情况  r在最左边
    if (r <= 0 || target !== nums[r - 1]) {
      return -1
    }

    // 右边是开区间 要-1
    return r - 1
  }

  return [left(), right()]
}
