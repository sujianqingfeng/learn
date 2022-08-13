import { describe, it, expect } from 'vitest'

import { judgeCircle } from '../index'

describe('judge-circle', () => {
  it('1', () => {
    const moves = 'UD'
    const result = judgeCircle(moves)
    expect(result).toEqual(true)
  })
})
