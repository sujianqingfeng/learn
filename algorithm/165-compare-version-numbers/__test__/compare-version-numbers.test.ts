import { describe, it, expect } from 'vitest'

import { compareVersion } from '../index'

describe('reverse-words', () => {
  it('1', () => {
    const version1 = '0.1',
      version2 = '1.1'
    const res = -1
    const result = compareVersion(version1, version2)
    expect(result).toBe(res)
  })

  it('2', () => {
    const version1 = '1.01',
      version2 = '1.001'
    const res = 0
    const result = compareVersion(version1, version2)
    expect(result).toBe(res)
  })
})
