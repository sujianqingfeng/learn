import { describe, it, expect } from 'vitest'

import { isSubsequence } from '../index'

describe('rotate-function', () => {
  it('1', () => {
    const s = 'abc',
      t = 'ahbgdc'
    const result = isSubsequence(s, t)
    expect(result).toEqual(true)
  })
})
