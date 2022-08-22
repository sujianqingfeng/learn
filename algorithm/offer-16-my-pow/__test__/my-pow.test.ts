import { describe, it, expect } from 'vitest'

import { myPow } from '../index'

describe('my-pow', () => {
  it('1', () => {
    const x = 2.00000, n = 10

    const result = myPow(x, n) 
    expect(result).toEqual(1024)
  })
})
