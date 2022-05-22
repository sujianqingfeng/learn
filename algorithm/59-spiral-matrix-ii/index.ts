// 59. 螺旋矩阵 II
export function generateMatrix(n: number) {
  const res = []

  for (let i = 0; i < n; i++) {
    res[i] = new Array(n).fill(0)
  }

  let num = 0

  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1

  while (num < n * n) {
    // 上
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        res[top][i] = ++num
      }
      top++
    }

    // 右
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        res[i][right] = ++num
      }

      right--
    }

    // 下
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res[bottom][i] = ++num
      }
      bottom--
    }

    // 左
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res[i][left] = ++num
      }
      left++
    }
  }

  return res
}
