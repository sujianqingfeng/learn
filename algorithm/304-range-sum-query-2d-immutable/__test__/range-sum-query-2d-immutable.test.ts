import { describe, it, expect } from 'vitest'

import { NumMatrix } from '../index'

describe('range-sum-query-2d-immutable', () => {
  it('1', () => {
    const matrix = [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ]
    const res = new NumMatrix(matrix).sumRegion(2, 1, 4, 3)
    expect(8).toEqual(res)
  })
})
