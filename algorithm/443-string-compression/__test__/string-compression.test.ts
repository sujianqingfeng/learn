import { describe, it, expect } from 'vitest'

import { compress } from '../index'

describe('string-compression', () => {
  it('1', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
    const res = 6
    const result = compress(chars)
    expect(result).toEqual(res)
  })
})
