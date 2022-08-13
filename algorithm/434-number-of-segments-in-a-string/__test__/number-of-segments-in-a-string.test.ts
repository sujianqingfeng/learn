import { describe, it, expect } from 'vitest'

import { countSegments } from '../index'

describe('count-segments', () => {
  it('1', () => {
    const s = 'Hello, my name is John'
    const res = 5
    const result = countSegments(s)
    expect(result).toEqual(res)
  })

  it('2', () => {
    const s = ''
    const res = 0
    const result = countSegments(s)
    expect(result).toEqual(res)
  })
})
