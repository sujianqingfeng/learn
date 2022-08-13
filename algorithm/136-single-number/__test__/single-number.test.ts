import { describe, it, expect } from 'vitest'

import { singleNumber } from '../index'

describe('single-number', () => {
  it('1', () => {
    const nums = [4, 1, 2, 1, 2]
    const res = 4
    const result = singleNumber(nums)
    expect(result).toEqual(res)
  })
})
