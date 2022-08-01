// 69. x 的平方根
export function mySqrt(x: number) {
  // 左闭右开
  let left = 0,
    right = x / 2 + 1

  while (left <= right) {
    const mid = left + ~~((right - left) >> 1)
    // console.log("mid", mid)

    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left - 1
}
