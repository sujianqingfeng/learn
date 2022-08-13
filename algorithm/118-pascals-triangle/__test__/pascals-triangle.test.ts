import { describe, it, expect } from 'vitest'

import { generate } from '../index'

describe('pascals-triangle', () => {
  it('1', () => {
    const numRows = 5
    const res = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    const result = generate(numRows)
    expect(result).toEqual(res)
  })
})
