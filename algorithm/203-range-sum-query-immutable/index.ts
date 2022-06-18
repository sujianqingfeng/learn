export class NumArray {
  private preNums
  constructor(private nums: number[]) {
    const n = nums.length
    this.preNums = Array(n + 1).fill(0)

    for (let i = 1; i <= n; i++) {
      this.preNums[i] = this.preNums[i - 1] + nums[i - 1]
    }
  }

  sumRange(left: number, right: number) {
    return this.preNums[right + 1] - this.preNums[left]
  }
}

export class NumArray2 {
  constructor(public nums: number[]) {}

  sumRange(left: number, right: number) {
    let sum = 0
    // 一次性两个数相加
    while (left <= right) {
      if (left === right) {
        sum = sum + this.nums[left]
      } else {
        sum = sum + this.nums[left] + this.nums[right]
      }

      left++
      right--
    }

    return sum
  }
}
