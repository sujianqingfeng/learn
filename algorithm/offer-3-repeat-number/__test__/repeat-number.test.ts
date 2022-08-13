import { describe, it, expect } from 'vitest'

import { findRepeatNumber } from '../index'

describe('repeat-number', () => {
  it('1', () => {
    const nums = [2, 3, 1, 0, 2, 5, 3]
    const result = findRepeatNumber(nums)
    expect(result).toEqual(2)
  })
})
