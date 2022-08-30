// 29. 顺时针打印矩阵
export function spiralOrder(matrix:number[][]) {

  const n = matrix.length
  if (n===0) { return [] }
  const m = matrix[0].length

  let t = 0, l = 0
  let b = n, r = m

  const ans = []

  while (ans.length< m * n ) {
    
    if (t<b) {
      for (let i = l; i < r; i++) {
        ans.push(matrix[t][i])
      }
      t++
    }

    if (l<r) {
      for (let i = t; i < b; i++) {
        ans.push(matrix[i][r-1])
      }
      r--
    }

    if (t<b) {
      for (let i = r-1; i >=l; i--) {
        ans.push(matrix[b-1][i])
      }
      b--
    }

    if (l<r) {
      for (let i = b-1; i >=t; i--) {
        ans.push(matrix[i][l])
      }
      l++
    }
    
  }
  
  return ans
}
