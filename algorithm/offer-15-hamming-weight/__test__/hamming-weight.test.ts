import { describe, it, expect } from 'vitest'

import { hammingWeight } from '../index'

describe('hamming-weight', () => {
  it('1', () => {
    const n = 11

    const result = hammingWeight(n) 
    expect(result).toEqual(3)
  })
})
