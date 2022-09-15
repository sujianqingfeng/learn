
export class LRUCache {
  capacity:number
  // map 是有序的
  store:Map<number, number>

  constructor(capacity:number) {
    this.capacity = capacity
    this.store = new Map()
  }
  get(key:number) {
    if (this.store.has(key)) {
      const value = this.store.get(key)
      // 重新设值
      this.store.delete(key)
      this.store.set(key, value!)
      return value
    }

    return -1
  }
  put(key:number, value:number) {
    if (this.store.has(key)) {
      this.store.delete(key)
    }
    this.store.set(key, value)
    if (this.store.size > this.capacity) {
      const firstKey = this.store.keys().next().value
      this.store.delete(firstKey)
    }
  }
}