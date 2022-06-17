export class NumArray {
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
