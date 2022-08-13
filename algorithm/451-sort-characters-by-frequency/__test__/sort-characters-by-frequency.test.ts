import { describe, it, expect } from 'vitest'

import { frequencySort } from '../index'

describe('frequency-sort', () => {
  it('1', () => {
    const s = 'tree'
    const result = frequencySort(s)
    const res = 'eetr'
    expect(result).toEqual(res)
  })
})
