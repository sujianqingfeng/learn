// 存在重复元素
export function containsDuplicate(nums:number[]) {
  const set = new Set()
  for (const x of nums) {
    if (set.has(x)) {
      return true
    }
    set.add(x)
  }
  return false

}