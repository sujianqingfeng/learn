// 448. 找到所有数组中消失的数字
export function findDisappearedNumbers(nums: number[]) {
  const set = new Set(nums)
  const res = []
  for (let i = 1; i <= nums.length; i++) {
    // 不存在就代表缺失的数
    if (!set.has(i)) {
      res.push(i)
    }
  }
  return res
}
