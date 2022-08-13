// 剑指 Offer 04. 二维数组中的查找
export function findNumberIn2DArray(matrix: number[][], target: number) {
  const n = matrix.length
  if (n === 0) { return false }
  const m = matrix[0].length

  let i = 0,
    j = m - 1

  while (i < n && j >= 0) {
    const current = matrix[i][j]

    if (current < target) {
      i++
    } else if (current > target) {
      j--
    } else {
      return true
    }
  }
  return false
}
