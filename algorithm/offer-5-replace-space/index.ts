// 剑指 Offer 05. 替换空格
export function replaceSpace(s: string) {
  const ans = []

  let i = 0

  for (const t of s) {
    if (t === ' ') {
      ans[i++] = '%'
      ans[i++] = '2'
      ans[i++] = '0'
    } else {
      ans[i++] = t
    }
  }

  return ans.join('')
}
