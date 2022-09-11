import { describe, it, expect } from 'vitest'
import { reverseWords } from '..'

describe('reverse-words', () => {
  it('1', () => {
    const  s = '  hello world!  '
    const result = reverseWords(s) 
    expect(result).toEqual('world! hello')
  })
})

