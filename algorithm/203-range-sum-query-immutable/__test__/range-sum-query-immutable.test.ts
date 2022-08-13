import { describe, it, expect } from 'vitest'

import { NumArray } from '../index'

describe('range-sum-query-immutable', () => {
  it('1', () => {
    const nums = [-2, 0, 3, -5, 2, -1]
    const res = new NumArray(nums).sumRange(2, 5)
    expect(-1).toEqual(res)
  })
})
