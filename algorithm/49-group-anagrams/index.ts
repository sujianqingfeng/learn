// 49. 字母异位词分组
export function groupAnagrams(strs: string[]) {
  const getKey = (str: string) => {
    return str.split("").sort().join("")
  }

  const map = new Map<string, string[]>()

  for (const str of strs) {
    const key = getKey(str)
    if (map.has(key)) {
      map.get(key)?.push(str)
    } else {
      map.set(key, [str])
    }
  }
  return [...map.values()]
}
