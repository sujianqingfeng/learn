import { describe, it, expect } from 'vitest'

import { fizzBuzz } from '../index'

describe('fizz-buzz', () => {
  it('1', () => {
    const n = 3
    const res = ['1', '2', 'Fizz']
    const result = fizzBuzz(n)
    expect(result).toEqual(res)
  })
})
