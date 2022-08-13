// 38. 外观数列
export function countAndSay(n: number) {
  let ans = '1'

  for (let i = 1; i < n; i++) {
    let pos = 0
    let start = 0
    const sb: string[] = []

    while (pos < ans.length) {
      const t = ans[start]
      while (pos < ans.length && ans[pos] === t) {
        pos++
      }
      sb.push(`${pos - start}${t}`)
      start = pos
    }
    ans = sb.join('')
  }

  return ans
}
