import { describe, it, expect } from 'vitest'

import { twoSum } from '../index'

describe('twoSum', () => {
  it('1', () => {
    const numList = [3, 2, 4]
    const result = twoSum(numList, 6)
    expect(result).toEqual([1, 2])
  })

  it('2', () => {
    const numList = [2, 7, 11, 15]
    const result = twoSum(numList, 18)
    expect(result).toEqual([1, 2])
  })
})
