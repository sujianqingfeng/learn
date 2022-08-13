import { describe, it, expect } from 'vitest'

import { complexNumberMultiply } from '../index'

describe('minimum-time-difference', () => {
  it('1', () => {
    const num1 = '1+1i',
      num2 = '1+1i'
    const result = complexNumberMultiply(num1, num2)
    expect(result).toEqual('0+2i')
  })
})
