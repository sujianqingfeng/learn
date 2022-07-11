// 506. 相对名次
export function findRelativeRanks(score: number[]) {
  const n = score.length
  const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"]

  const mp = Array(n)
    .fill(0)
    .map(() => Array(2).fill(0))

  // 映射关系
  for (let i = 0; i < n; i++) {
    mp[i][0] = score[i]
    mp[i][1] = i
  }

  // 排序
  mp.sort((a, b) => b[0] - a[0])

  const ans = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (i >= 3) {
      ans[mp[i][1]] = i + 1 + ""
    } else {
      ans[mp[i][1]] = desc[i]
    }
  }

  return ans
}
