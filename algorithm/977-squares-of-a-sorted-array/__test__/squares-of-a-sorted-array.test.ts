import { describe, it, expect } from 'vitest'

import { sortedSquares } from '../index'

describe('sorted-squares', () => {
  it('1', () => {
    const nums = [-4, -1, 0, 3, 10]
    const res = [0, 1, 9, 16, 100]
    const result = sortedSquares(nums)
    expect(result).toEqual(res)
  })
})
