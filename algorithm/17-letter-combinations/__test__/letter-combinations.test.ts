import { describe, it, expect } from 'vitest'

import { letterCombinations } from '../index'

describe('letter-combinations', () => {
  it('1', () => {
    const digits = '23'
    const result = letterCombinations(digits)
    expect(result).toMatchInlineSnapshot(`
      [
        "ad",
        "ae",
        "af",
        "bd",
        "be",
        "bf",
        "cd",
        "ce",
        "cf",
      ]
    `)
  })
})
