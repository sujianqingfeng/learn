import { describe, it, expect } from 'vitest'

import { maxRotateFunction } from '../index'

describe('rotate-function', () => {
  it('1', () => {
    const nums = [4, 3, 2, 6]
    const res = 26
    const result = maxRotateFunction(nums)
    expect(result).toEqual(res)
  })
})
