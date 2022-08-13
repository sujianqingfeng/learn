import { describe, it, expect } from 'vitest'

import { rotate } from '../index'

describe('rotate-array', () => {
  it('1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7],
      k = 3
    const res = [5, 6, 7, 1, 2, 3, 4]
    rotate(nums, k)
    expect(nums).toEqual(res)
  })
})
