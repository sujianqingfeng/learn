import { describe, it, expect } from 'vitest'

import { generateMatrix } from '../index'

describe('spiral-matrix-ii ', () => {
  it('1', () => {
    const n = 3
    const res = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]
    const result = generateMatrix(n)
    expect(result).toEqual(res)
  })
})
