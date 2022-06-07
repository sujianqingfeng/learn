// 661. 图片平滑器
export function imageSmoother(img: number[][]) {
  const m = img.length
  const n = img[0].length

  const res: number[][] = []

  // 方位
  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ]

  for (let i = 0; i < m; i++) {
    if (res[i] === undefined) {
      res[i] = []
    }
    for (let j = 0; j < n; j++) {
      let c = 0,
        t = 0
      for (const [x, y] of dirs) {
        const dx = i + x
        const dy = j + y
        // 如果越界 就忽略
        if (dy < 0 || dx < 0 || dy >= n || dx >= m) {
          continue
        }
        t += img[dx][dy]
        c++
      }
      res[i][j] = Math.floor(t / c)
    }
  }

  return res
}
