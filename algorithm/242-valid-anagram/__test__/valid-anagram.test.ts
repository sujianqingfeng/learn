import { describe, it, expect } from 'vitest'

import { isAnagram } from '../index'

describe('valid-anagram', () => {
  it('1', () => {
    const s = 'anagram',
      t = 'nagaram'
    const res = true
    const result = isAnagram(s, t)
    expect(result).toEqual(res)
  })
})
