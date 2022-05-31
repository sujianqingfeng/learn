// 274. H 指数
export function hIndex(citations: number[]) {
  // 先排序 从最高引用的文章开始往下找
  citations.sort((a, b) => a - b)

  let index = citations.length - 1
  let h = 0

  // 从后往前找
  // h的定义是 每篇至少被引用h次，其余不超过h次
  // citations[index] > h 代表是的找到一篇至少被引用h+1次

  while (index >= 0 && citations[index] > h) {
    // 继续找下个是否满足条件
    index--
    // h加1
    h++
  }
  return h
}
