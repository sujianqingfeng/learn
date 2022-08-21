import { describe, it, expect } from 'vitest'

import { printNumbers } from '../index'

describe('print-numbers', () => {
  it('1', () => {
    const n = 1

    const result = printNumbers(n) 
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
