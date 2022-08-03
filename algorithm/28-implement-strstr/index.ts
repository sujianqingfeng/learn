// 28. 实现 strStr()
export function strStr(haystack: string, needle: string) {
  const n = haystack.length
  const m = needle.length

  const next = Array(m).fill(0)

  // next 表
  for (let i = 1, j = 0; i < m; i++) {
    // 不一致 往前找
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1]
    }

    // 一致 记录+1
    if (needle[i] === needle[j]) {
      j++
    }
    next[i] = j
  }

  for (let i = 0, j = 0; i < n; i++) {
    // 往前回溯
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }

    if (haystack[i] === needle[j]) {
      j++
    }

    // 匹配结束
    if (j === m) {
      return i - m + 1
    }
  }

  return -1
}
