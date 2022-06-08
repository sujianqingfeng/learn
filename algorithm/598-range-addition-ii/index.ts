//598. 范围求和 II
export function maxCount(m: number, n: number, ops: number[][]) {
  let minW = m
  let minH = n

  // 最多交叉的区域即最大
  for (const [x, y] of ops) {
    minW = Math.min(minW, x)
    minH = Math.min(minH, y)
  }

  return minW * minH
}
