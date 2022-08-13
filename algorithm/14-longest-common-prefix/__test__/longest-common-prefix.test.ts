import { describe, it, expect } from 'vitest'

import { longestCommonPrefix } from '../index'

describe('longest-common-prefix', () => {
  it('1', () => {
    const strs = ['flower', 'flow', 'flight']
    const res= 'fl' 
    const result = longestCommonPrefix(strs) 
    expect(result).toBe(res)
  })
})
