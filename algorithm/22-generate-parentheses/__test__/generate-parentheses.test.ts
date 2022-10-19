import { describe, it, expect } from 'vitest'

import { generateParentheses } from '../index'

describe('generate-parentheses', () => {
  it('1', () => {
    const n = 3
    const result = generateParentheses(n)
    // (()) | ()()
    expect(result).toMatchInlineSnapshot(`
      [
        "()()",
        "(())",
      ]
    `)
  })
})
