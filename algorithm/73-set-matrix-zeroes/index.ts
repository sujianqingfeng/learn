// 73. 矩阵置零
export function setZeroes(matrix: number[][]) {
  const m = matrix.length
  const n = matrix[0].length

  const row = Array(m).fill(false)
  const col = Array(n).fill(false)

  // 先记录位置
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true
      }
    }
  }

  // 纵向 和 横向 置为0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0
      }
    }
  }
}
