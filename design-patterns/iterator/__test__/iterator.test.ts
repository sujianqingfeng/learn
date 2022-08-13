import { describe, it, expect } from 'vitest'

import { range } from '../index'

describe('iterator', () => {
  it('1', () => {
    const result = []
    for (const n of range(1, 10, 5)) {
      result.push(n)
    }
    expect(result).toMatchInlineSnapshot(`
      [
        1,
        6,
      ]
    `)
  })
})
