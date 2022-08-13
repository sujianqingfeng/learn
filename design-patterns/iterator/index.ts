export function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (start < end) {
        start = start + step
        return { value: start - step, done: false }
      }

      return { done: true, value: end }
    },
  }
}
