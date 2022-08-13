import { describe, it, expect } from 'vitest'

import { minMoves } from '../index'

describe('min-moves', () => {
  it('1', () => {
    const nums = [1, 2, 3]
    const res = 3
    const result = minMoves(nums)
    expect(result).toEqual(res)
  })
})
