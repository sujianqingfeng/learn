import { describe, it, expect } from 'vitest'

import { productExceptSelf } from '../index'

describe('product-except-self', () => {
  it('1', () => {
    const nums = [1, 2, 3, 4]
    const res = [24, 12, 8, 6]
    const result = productExceptSelf(nums)
    expect(result).toEqual(res)
  })
})
