import { describe, it, expect } from 'vitest'

import { thirdMax } from '../index'

describe('third-max', () => {
  it('1', () => {
    const nums = [5, 2, 2]
    const res = 5
    const result = thirdMax(nums) 
    expect(result).toEqual(res)
  })

  it('2', () => {
    const nums = [1, 2, -2147483648]
    const res = -2147483648
    const result = thirdMax(nums) 
    expect(result).toEqual(res)
  })
})
