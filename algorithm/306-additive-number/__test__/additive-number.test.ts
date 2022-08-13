import { describe, it, expect } from 'vitest'
import { isAdditiveNumber } from '../index'

describe('additive-number', () => {
  it('1', () => {
    const s = '112358'
    const result = isAdditiveNumber(s)
    expect(result).toEqual(true)
  })

  it('2', () => {
    const s = '199100199'
    const result = isAdditiveNumber(s)
    expect(result).toEqual(true)
  })
})
