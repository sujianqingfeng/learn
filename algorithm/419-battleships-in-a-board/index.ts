// 419. 甲板上的战舰
export function countBattleships(board: string[][]) {
  let res = 0

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        board[i][j] = '.'
        // 横向设置
        for (let k = i + 1; k < board.length && board[k][j] === 'X'; k++) {
          board[k][j] = '.'
        }

        // 纵向设置
        for (let k = j + 1; k < board[i].length && board[i][k] === 'X'; k++) {
          board[i][k] = '.'
        }
        res++
      }
    }
  }
  return res
}
