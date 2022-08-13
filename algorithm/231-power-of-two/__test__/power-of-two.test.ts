import { describe, it, expect } from 'vitest'

import { isPowerOfTwo } from '../index'

describe('power-of-two', () => {
  it('1', () => {
    const n = 16
    const result = isPowerOfTwo(n)
    expect(result).toEqual(true)
  })
})
