import { describe, it, expect } from 'vitest'

import { merge } from '../index'

describe('merge-sorted-array', () => {
  it('1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0],
      m = 3,
      nums2 = [2, 5, 6],
      n = 3
    const ans = [1, 2, 2, 3, 5, 6]
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual(ans)
  })
})
