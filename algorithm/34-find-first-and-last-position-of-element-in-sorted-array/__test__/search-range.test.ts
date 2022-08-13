import { describe, it, expect } from 'vitest'

import { searchRange } from '../index'

describe('search-range', () => {
  it('1', () => {
    const nums = [5, 7, 7, 8, 8, 10],
      target = 8
    const res = [3, 4]
    const result = searchRange(nums, target)
    expect(result).toEqual(res)
  })
})
