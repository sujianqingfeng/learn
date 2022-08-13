import { describe, it, expect } from 'vitest'

import { checkRecord } from '../index'

describe('detect-capital-use', () => {
  it('1', () => {
    const s = 'PPALLP'
    const result = checkRecord(s)
    expect(result).toEqual(true)
  })

  it('2', () => {
    const s = 'ALLAPPL'
    const result = checkRecord(s)
    expect(result).toEqual(false)
  })
})
