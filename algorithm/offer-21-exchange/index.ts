// 调整数组顺序使奇数位于偶数前面
export function exchange(nums:number[]) {
  let fast  = 0, slow = 0
  const n = nums.length

  while (fast<n) {
    if (nums[fast] & 1) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
    }
    fast++
  }
}