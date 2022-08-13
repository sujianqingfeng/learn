// 498. 对角线遍历
export function findDiagonalOrder(mat: number[][]) {
  const m = mat.length
  const n = mat[0].length

  let i = 0
  const res = []

  while (i < m + n) {
    // 奇数次
    // 规律是 x坐标越来越大  y 坐标越来越小
    // 即是 x一开始最小 y最大
    // 但是要从二维数组中取出这个数
    // 需要x y 调换位置才能取到
    // 即 x 最大 y最小

    let x1 = i < m ? i : m - 1
    let y1 = i - x1
    while (x1 >= 0 && y1 < n) {
      // console.log(`第${i}次`, x1, y1, mat[x1][y1])
      res.push(mat[x1][y1])
      y1++
      x1--
    }
    i++

    if (i >= m + n) { break }

    let y2 = i < n ? i : n - 1
    let x2 = i - y2

    while (y2 >= 0 && x2 < m) {
      // console.log(`第${i}次`, x2, y2, mat[x2][y2])
      res.push(mat[x2][y2])
      y2--
      x2++
    }
    i++
  }
  return res
}
