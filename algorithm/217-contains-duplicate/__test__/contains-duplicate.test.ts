import { describe, it, expect } from 'vitest'

import { containsDuplicate } from '../index'

describe('contains-duplicate', () => {
  it('1', () => {
    const nums = [1, 2, 3, 1]
    const res = true
    const result = containsDuplicate(nums)
    expect(result).toEqual(res)
  })
})
