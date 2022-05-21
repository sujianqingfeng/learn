// 54. 螺旋矩阵
export function spiralOrder(matrix: number[][]) {
  const m = matrix.length
  const n = matrix[0].length

  let left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1

  const res = []

  while (res.length < m * n) {
    // 上
    if (top <= bottom) {
      // 从左边往右
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i])
      }
      // 上边界下移
      top++
    }

    // 右
    if (left <= right) {
      // 从上往下
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right])
      }
      // 右边界左移
      right--
    }

    // 下
    if (top <= bottom) {
      // 从右往左
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
      // 下边界上移
      bottom--
    }

    // 左
    if (left <= right) {
      // 从下往上
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }
      // 左边界右移
      left++
    }
  }

  return res
}
