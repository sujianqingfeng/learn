import { describe, it, expect } from 'vitest'
import { reverseLeftWords } from '..'

describe('reverse-left-words', () => {
  it('1', () => {
    const s = 'abcdefg', k = 2
    const result = reverseLeftWords(s, k) 
    expect(result).toMatchInlineSnapshot('"cdefgab"')
  })
})

