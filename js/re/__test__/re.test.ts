import { describe, it, expect } from 'vitest'

import { findMatchPhoneIndex } from '../index'

describe('re', () => {
  it('1', () => {
    expect(findMatchPhoneIndex('141 3444 1245', '1344')).toBe(2)
    expect(findMatchPhoneIndex('141 3444 1245', '1413')).toBe(0)
    expect(findMatchPhoneIndex('141 3444 1245', '1245')).toBe(8)
  })
})