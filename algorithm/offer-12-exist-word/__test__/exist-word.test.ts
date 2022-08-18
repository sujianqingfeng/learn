import { describe, it, expect } from 'vitest'

import { exist } from '../index'

describe('exist-word', () => {
  it('1', () => {
    const board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word = 'ABCCED'

    const result = exist(board, word)
    expect(result).toEqual(true)
  })
})
