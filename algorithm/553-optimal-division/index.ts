// 553. 最优除法
export function optimalDivision(nums: number[]) {
  const n = nums.length
  const ans = []

  for (const num of nums) {
    ans.push(num)
    ans.push('/')
  }
  ans.pop()

  if (n > 2) {
    const index = ans.findIndex((item) => item === '/')
    ans.splice(index + 1, 0, '(')
    ans.push(')')
  }

  return ans.join('')
}
