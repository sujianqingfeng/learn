import { describe, it, expect } from 'vitest'

import { threeSumClosest } from '../index'

describe('three-sum-closest', () => {
  it('1', () => {
    const nums = [-1, 2, 1, -4],
      target = 1
    const res = 2
    const result = threeSumClosest(nums, target)
    expect(result).toEqual(res)
  })
})
