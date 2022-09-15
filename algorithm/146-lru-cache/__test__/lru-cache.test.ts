import { describe, it, expect } from 'vitest'

import { LRUCache } from '../index'

describe('lru-cache', () => {
  it('1', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 1) // 缓存是 {1=1}
    lRUCache.put(2, 2) // 缓存是 {1=1, 2=2}
    expect(lRUCache.get(1)).toEqual(1)     // 返回 1
    lRUCache.put(3, 3) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
    expect(lRUCache.get(2)).toEqual(-1)     // 返回 -1 (未找到)
    lRUCache.put(4, 4) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
    expect(lRUCache.get(1)).toEqual(-1)     // 返回 -1 (未找到)
    expect(lRUCache.get(3)).toEqual(3)     
    expect(lRUCache.get(4)).toEqual(4)     
  })
})
