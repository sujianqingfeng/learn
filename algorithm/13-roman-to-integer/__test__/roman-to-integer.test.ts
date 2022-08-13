import { describe, it, expect } from 'vitest'

import { romanToInt } from '../index'

describe('integer-to-roman', () => {
  it('1', () => {
    const s = 'MCMXCIV' 
    const res= 1994 
    const result = romanToInt(s) 
    expect(result).toBe(res)
  })

  it('2', () => {
    const s = 'X'
    const res= 10
    const result = romanToInt(s) 
    expect(result).toBe(res)
  })
})
