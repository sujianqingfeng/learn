
import { describe, it, expect } from 'vitest'

import { lengthOfLongestSubstring } from '../index'

describe('lengthOfLongestSubstring', () => {

  it('1', () => {
    const s = 'abcabcbb'
    const result = lengthOfLongestSubstring(s)
    expect(result).toEqual(3)
  })

  it('2', () => {
    const s = 'bbbbb'
    const result = lengthOfLongestSubstring(s)
    expect(result).toEqual(1)
  })

  it('3', () => {
    const s = 'pwwkew'
    const result = lengthOfLongestSubstring(s)
    expect(result).toEqual(3)
  })
})
