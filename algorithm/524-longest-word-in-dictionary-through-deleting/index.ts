// 524. 通过删除字母匹配到字典里最长单词
export function findLongestWord(s: string, dictionary: string[]) {
  dictionary = dictionary.sort()
  let longest = ""

  for (const cur of dictionary) {
    if (find(s, cur) && cur.length > longest.length) {
      longest = cur
    }
  }

  return longest

  function find(s: string, d: string) {
    const n = s.length
    const m = d.length

    let i = 0,
      j = 0
    while (i < n && j < m) {
      if (s[i] === d[j]) {
        j++
      }
      i++
    }
    return j === m
  }
}
