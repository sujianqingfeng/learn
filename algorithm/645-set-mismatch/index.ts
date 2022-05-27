// 645. 错误的集合
export function findErrorNums(nums: number[]) {
  const map: Record<number, number> = {}

  for (const num of nums) {
    map[num] === undefined ? (map[num] = 1) : map[num]++
  }

  const res = []
  for (let i = 1; i <= nums.length; i++) {
    // 出现2次 代表重复的数
    if (map[i] === 2) {
      res[0] = i
    }

    // 没有出现
    if (map[i] === undefined) {
      res[1] = i
    }
  }

  return res
}
