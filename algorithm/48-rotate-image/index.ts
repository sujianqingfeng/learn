// 48. 旋转图像
export function rotate(matrix: number[][]) {
  // 先左上角到右下角的对角线 进行反转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // 然后每一行 进行反转
  for (const row of matrix) {
    let i = 0,
      j = row.length - 1

    while (i < j) {
      const temp = row[i]

      row[i] = row[j]
      row[j] = temp
      i++
      j--
    }
  }

  return matrix
}
