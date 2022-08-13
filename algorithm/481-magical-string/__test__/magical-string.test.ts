import { describe, it, expect } from 'vitest'

import { magicalString } from '../index'

describe('magical-string', () => {
  it('1', () => {
    const n = 6
    const result = magicalString(n)
    expect(result).toEqual(3)
  })

  it('2', () => {
    const n = 8
    const result = magicalString(n)
    expect(result).toEqual(4)
  })
})
