import { describe, it, expect } from 'vitest'

import { findMedianSortedArrays } from '../index'

describe('findMedianSortedArrays ', () => {
  it('1', () => {
    const nums1 = [1, 3],
      nums2 = [2]
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toBe(2)
  })
})
