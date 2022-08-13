import { describe, it, expect } from 'vitest'

import { reverseWords } from '../index'

describe('reverse-words', () => {
  it('1', () => {
    const s = 'Let\'s take LeetCode contest'
    const res = 's\'teL ekat edoCteeL tsetnoc'

    const result = reverseWords(s)

    expect(result).toEqual(res)
  })
})
