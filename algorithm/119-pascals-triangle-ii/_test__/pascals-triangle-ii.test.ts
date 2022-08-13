import { describe, it, expect } from 'vitest'

import { getRow } from '../index'

describe('pascals-triangle-ii', () => {
  it('1', () => {
    const rowIndex = 3
    const res = [1, 3, 3, 1]
    const result = getRow(rowIndex)
    expect(result).toEqual(res)
  })
})
