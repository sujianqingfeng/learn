// 697. 数组的度
export function findShortestSubArray(nums: number[]) {
  const map = new Map()

  // 记录 数字出现的次数 已经对应的位置
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (map.has(num)) {
      map.get(num).num++
      map.get(num).list.push(i)
    } else {
      map.set(num, { num: 1, list: [i] })
    }
  }

  let num = 0,
    res = Number.MAX_VALUE
  for (const value of map.values()) {
    if (value.num >= num) {
      const n = value.list.length
      // 算出距离
      const t = value.list[n - 1] - value.list[0] + 1
      // 如果是同频次  就比最小  如果不是就取当前
      res = value.num === num ? Math.min(res, t) : t
      num = value.num
    }
  }

  return res
}
