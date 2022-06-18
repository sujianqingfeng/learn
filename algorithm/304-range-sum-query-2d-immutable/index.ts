// 304. 二维区域和检索 - 矩阵不可变
export class NumMatrix {
  private preSum: number[][]

  // 先求出前缀和
  constructor(private matrix: number[][]) {
    const m = matrix.length
    const n = matrix[0].length

    this.preSum = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0))

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        this.preSum[i][j] =
          this.preSum[i - 1][j] +
          this.preSum[i][j - 1] +
          matrix[i - 1][j - 1] -
          this.preSum[i - 1][j - 1]
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number) {
    return (
      this.preSum[row2 + 1][col2 + 1] -
      this.preSum[row1][col2 + 1] -
      this.preSum[row2 + 1][col1] +
      this.preSum[row1][col1]
    )
  }
}
