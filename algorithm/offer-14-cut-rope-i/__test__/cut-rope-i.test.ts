import { describe, it, expect } from 'vitest'

import { cuttingRope } from '../index'

describe('cut-rope-i', () => {
  it('1', () => {
    const n = 10

    const result = cuttingRope(n) 
    expect(result).toEqual(36)
  })
})
