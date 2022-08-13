import { describe, it, expect } from 'vitest'

import { reverse } from '../index'

describe('reverse-integer', () => {
  it('1', () => {
    const x = 123
    const result = reverse(x)
    expect(result).toBe(321)
  })
})
