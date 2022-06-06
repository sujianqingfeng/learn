// 119. 杨辉三角 II
export function getRow(rowIndex: number) {
  const res = []

  for (let i = 0; i <= rowIndex; i++) {
    res[i] = 1
    for (let j = i; j > 1; j--) {
      res[j - 1] = res[j - 1] + res[j - 2]
    }
  }

  return res
}

// rowIndex = 3
// 1
// 1 1
// 1 1 1 -> 1 2 1
// 1 2 1 1 -> 1 2 3 1 -> 1 3 3 1
