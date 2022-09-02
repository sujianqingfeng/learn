import { describe, it, expect } from 'vitest'

import { isNumber } from '../index'

describe('is-number', () => {
  it('1', () => {
    const s = '    .1  '
    const result = isNumber(s) 
    expect(result).toEqual(true)
  })

  it('2', () => {
    const s = '46.e3'
    const result = isNumber(s) 
    expect(result).toEqual(true)
  })
})
