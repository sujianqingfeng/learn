// 387. 字符串中的第一个唯一字符
export function firstUniqChar(s: string) {
  const list = Array.from(s)
  const map = new Map()
  const r = []

  for (const [index, c] of Object.entries(list)) {
    if (!map.has(c)) {
      map.set(c, 1)
      r.push([c, +index])
    } else {
      map.set(c, -1)

      // 出现一个就删除
      while (r.length && map.get(r[0][0]) === -1) {
        r.shift()
      }
    }
  }

  return r.length ? r[0][1] : -1
}
