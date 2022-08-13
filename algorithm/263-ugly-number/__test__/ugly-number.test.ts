import { describe, it, expect } from 'vitest'

import { isUgly } from '../index'

describe('ugly-number', () => {
  it('1', () => {
    const n = 6
    const result = isUgly(n)
    expect(result).toEqual(true)
  })
})
