// 289. 生命游戏
export function gameOfLife(board: number[][]) {
  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ]

  const m = board.length
  const n = board[0].length

  const map: Record<number, number[]> = {}
  let count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const cur = board[i][j]
      let a = 0
      let d = 0
      for (const [x, y] of dirs) {
        const dx = i + x
        const dy = j + y

        // 忽略边界条件
        if (dx >= 0 && dy >= 0 && dx < m && dy < n) {
          board[dx][dy] === 1 ? a++ : d++
        }
      }
      map[count] = [cur, a, d]
      count++
    }
  }

  count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const [c, a, d] = map[count]
      if (c === 0 && a === 3) {
        board[i][j] = 1
      }

      if (c === 1) {
        if (a < 2) [(board[i][j] = 0)]
        if (a === 2 || a === 3) {
          board[i][j] = 1
        }
        if (a > 3) {
          board[i][j] = 0
        }
      }

      count++
    }
  }

  return board
}
