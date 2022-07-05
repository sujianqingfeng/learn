// 451. 根据字符出现频率排序
export function frequencySort(s: string) {
  let max = 0
  const mp = new Map()
  // 统计字符出现的字数
  for (const ch of s) {
    const count = (mp.get(ch) || 0) + 1
    mp.set(ch, count)
    max = Math.max(max, count)
  }

  const buckets = new Array(max + 1).fill(0).map(() => new Array())

  // 相同次数的字符放到一起
  for (const [ch, count] of mp.entries()) {
    buckets[count].push(ch)
  }

  const ret: string[] = []
  for (let i = max; i > 0; i--) {
    // i 代表次数
    // bucket 代表同次数的字符串

    const bucket = buckets[i]
    bucket.forEach((ch) => {
      for (let j = 0; j < i; j++) {
        ret.push(ch)
      }
    })
  }

  return ret.join("")
}
