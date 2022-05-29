// 442. 数组中重复的数据
export function findDuplicates(nums: number[]) {
  // [1,n]
  // [0,n-1]
  // 利用上面的对应关系，并且对值取反 ，如果遇到小于0的数 就代表之前有数对其进行了操作  代表之前就存在同值
  const res = []
  for (const num of nums) {
    if (nums[Math.abs(num) - 1] < 0) {
      res.push(Math.abs(num))
      continue
    }
    nums[Math.abs(num) - 1] *= -1
  }

  return res
}
