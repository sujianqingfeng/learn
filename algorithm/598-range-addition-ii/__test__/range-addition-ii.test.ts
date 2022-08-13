import { describe, it, expect } from 'vitest'

import { maxCount } from '../index'

describe('range-addition-ii', () => {
  it('1', () => {
    const m = 3,
      n = 3,
      ops = [
        [2, 2],
        [3, 3],
      ]
    const res = 4
    const result = maxCount(m, n, ops)
    expect(result).toEqual(res)
  })
})
