import { describe, it, expect } from 'vitest'

import { isMatch } from '../index'

describe('regular-expression-matching', () => {
  it('1', () => {
    const s = 'aa',
      p = 'a'
    const result = isMatch(s, p)
    expect(result).toBeFalsy()
  })

  it('2', () => {
    const s = 'aa',
      p = 'a*'
    const result = isMatch(s, p)
    expect(result).toBeTruthy()
  })

  it('3', () => {
    const s = 'ab',
      p = '.*'
    const result = isMatch(s, p)
    expect(result).toBeTruthy()
  })
})
