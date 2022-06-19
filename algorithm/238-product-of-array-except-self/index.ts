// 238. 除自身以外数组的乘积
export function productExceptSelf(nums: number[]) {
  const n = nums.length

  // 左边
  const left = [1]
  for (let i = 1; i < n; i++) {
    left.push(left[i - 1] * nums[i - 1])
  }

  const res = []
  const right = Array(n).fill(1)

  // 右边 和 计算结果
  for (let j = n - 2; j < n && j >= -1; j--) {
    const temp = right[j + 1] * nums[j + 1]
    right[j] = temp
    const index = j + 1

    res.unshift(right[index] * left[index])
  }
  return res
}
