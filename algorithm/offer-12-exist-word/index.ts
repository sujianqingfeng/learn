// Offer 12. 矩阵中的路径
export function exist(board:string[][], word:string) {

  const n = board.length, m = board[0].length

  const find = (i:number, j:number, k:number): boolean => {

    // 边界

    if (i<0 || i>=n || j<0 || j>=m || board[i][j] !== word[k]) {
      return false
    }

    if (k === word.length - 1) {
      return true
    }

    // 相等之后
    // 清空路线
    board[i][j] = ''
    const nextK = k + 1
    const ans = find(i+1, j, nextK) || find(i, j+1, nextK) || find(i-1, j, nextK) || find(i, j-1, nextK) 
    // 恢复 
    board[i][j] = word[k]

    return ans
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (find(i, j, 0)) {
        return true
      }
      
    }
    
  }
  return false

}