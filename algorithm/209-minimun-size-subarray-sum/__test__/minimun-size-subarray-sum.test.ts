import { describe, it, expect } from 'vitest'

import { minSubArrayLen } from '../index'

describe('min-sub-array-len', () => {
  it('1', () => {
    const target = 7,
      nums = [2, 3, 1, 2, 4, 3]
    const res = 2
    const result = minSubArrayLen(target, nums)
    expect(result).toEqual(res)
  })
})
