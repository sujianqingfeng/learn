export function threeSumClosest(nums: number[], target: number) {
  // 排序
  nums = nums.sort((o, t) => o - t)
  let res = undefined
  const n = nums.length

  for (let i = 0; i < n; i++) {
    let L = i + 1,
      R = n - 1

    while (L < R) {
      const r = nums[i] + nums[L] + nums[R]
      // console.log("index", i, "r", nums[i], nums[L], nums[R], "=", r)

      // 第一次没值的时候
      if (res === undefined) {
        res = r
      }

      // 存在更接近target的值
      if (Math.abs(r - target) < Math.abs(res - target)) {
        res = r
      }

      // 大于target 想左移动 尝试使结果变小
      if (r > target) {
        R--
      } else if (r < target) {
        L++
      } else {
        return r
      }
    }
  }
  return res
}
