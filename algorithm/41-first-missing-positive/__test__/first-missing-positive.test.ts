import { describe, it, expect } from 'vitest'

import { firstMissingPositive } from '../index'

describe('first-missing-positive', () => {
  it('1', () => {
    const nums = [7, 8, 9, 11, 12]
    const res = 1
    const result = firstMissingPositive(nums)
    expect(result).toEqual(res)
  })
})
