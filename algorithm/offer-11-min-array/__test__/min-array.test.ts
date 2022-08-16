import { describe, it, expect } from 'vitest'

import { minArray } from '../index'

describe('min-array', () => {
  it('1', () => {
    const numbers = [3, 4, 5, 1, 2]
    const result = minArray(numbers)
    expect(result).toEqual(1)
  })
})
