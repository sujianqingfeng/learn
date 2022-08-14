import { describe, it, expect } from 'vitest'

import { numWays } from '../index'

describe('nums-ways', () => {
  it('1', () => {

    const n = 7
    const result = numWays(n)
    expect(result).toEqual(21)
  })
})
