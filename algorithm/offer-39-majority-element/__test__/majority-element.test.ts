import { describe, it, expect } from 'vitest'
import { majorityElement } from '..'

describe('majority-element', () => {
  it('1', () => {
    const nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
    const result = majorityElement(nums) 
    expect(result).toEqual(2)
  })

})

