import { describe, it, expect } from 'vitest'

import { findSubstringInWraproundString } from '../index'

describe('find-substring-in-wrapsround-string', () => {
  it('1', () => {
    const s = 'zab'
    const result = findSubstringInWraproundString(s)
    expect(result).toEqual(6)
  })
})
