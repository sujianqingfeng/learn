// 396. 旋转函数
export function maxRotateFunction(nums: number[]) {
  let f = 0,
    sum = 0
  const  n = nums.length

  for (let i = 0; i < n; i++) {
    sum += nums[i]
    // f0
    f = f + i * nums[i]
  }

  let res = f
  //   F(i) = F(i-1) + sum - n * A(n-i)
  for (let i = 1; i < n; i++) {
    f = f + sum - n * nums[n - i]
    res = Math.max(f, res)
  }
  return res
}
