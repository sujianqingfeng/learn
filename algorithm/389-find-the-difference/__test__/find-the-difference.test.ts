import { describe, it, expect } from 'vitest'

import { findTheDifference } from '../index'

describe('find-the-difference', () => {
  it('1', () => {
    const s = 'abcd',
      t = 'abcde'
    const res = 'e'
    const result = findTheDifference(s, t)
    expect(res).toBe(result)
  })
})
