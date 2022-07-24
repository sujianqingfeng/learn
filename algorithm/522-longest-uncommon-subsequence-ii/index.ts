// 522. 最长特殊序列 II
export function findUSlength(strs: string[]) {
  const n = strs.length
  let ans = -1

  for (let i = 0; i < n; i++) {
    let check = true
    for (let j = 0; j < n; j++) {
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        check = false
        break
      }
    }

    if (check) {
      ans = Math.max(ans, strs[i].length)
    }
  }
  return ans

  function isSubsequence(a: string, b: string) {
    const n = a.length
    const m = b.length

    if (n > m) {
      return false
    }

    let i = 0,
      j = 0
    while (i < n && j < m) {
      if (a[i] === b[j]) {
        i++
      }
      j++
    }
    return i === n
  }
}
