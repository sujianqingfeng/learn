// 566. 重塑矩阵
export function matrixReshape(mat: number[][], r: number, c: number) {
  const m = mat.length
  const n = mat[0].length

  if (m * n !== r * c) {
    return mat
  }

  let index = 0
  const res = Array(r)
    .fill(0)
    .map(() => Array(c).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const x = Math.floor(index / c)
      const y = index % c

      res[x][y] = mat[i][j]
      index++
    }
  }
  return res
}
