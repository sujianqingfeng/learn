import { describe, it, expect } from 'vitest'

import { fib } from '../index'

describe('fib', () => {
  it('1', () => {
    const n = 5
    const result = fib(n)
    expect(result).toEqual(5)
  })
})
