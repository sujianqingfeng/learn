import { describe, it, expect } from 'vitest'

import { firstUniqChar } from '../index'

describe('first-uniq-char', () => {
  it('1', () => {
    const s = 'loveleetcode'
    const res = 2
    const result = firstUniqChar(s)
    expect(res).toBe(result)
  })
})
