//118. 杨辉三角
export function generate(numRows: number) {
  const res = []

  for (let i = 0; i < numRows; i++) {
    // 主要是让第一个和最后一个置为1
    const row = Array(i + 1).fill(1)
    // 忽略第一个和最后一个
    for (let j = 1; j < row.length - 1; j++) {
      // 当前值为上两个值相加
      row[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(row)
  }
  return res
}
