import { describe, it, expect } from 'vitest'

import { threeSum } from '../index'

describe('three-sum', () => {
  it('1', () => {
    const nums = [-1, 0, 1, 2, -1, -4]
    const res = [
      [-1, -1, 2],
      [-1, 0, 1],
    ]
    const result = threeSum(nums)
    expect(result).toEqual(res)
  })

  it('2', () => {
    const nums = [0, 0]
    const res: number[] = []
    const result = threeSum(nums)
    expect(result).toEqual(res)
  })

  it('3', () => {
    const nums = [1, 2, -2, -1]
    const res: number[] = []
    const result = threeSum(nums)
    expect(result).toEqual(res)
  })

  it('4', () => {
    const nums = [1, -1, -1, 0]
    const res = [[-1, 0, 1]]
    const result = threeSum(nums)
    expect(result).toEqual(res)
  })
})
