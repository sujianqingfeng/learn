import { describe, it, expect } from 'vitest'

import { fullJustify } from '../index'

describe('text-justification', () => {
  it('1', () => {
    const words = [
        'Science',
        'is',
        'what',
        'we',
        'understand',
        'well',
        'enough',
        'to',
        'explain',
        'to',
        'a',
        'computer.',
        'Art',
        'is',
        'everything',
        'else',
        'we',
        'do',
      ],
      maxWidth = 20

    const res = [
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  ',
    ]

    const result = fullJustify(words, maxWidth)
    expect(result).toEqual(res)
  })

  it('2', () => {
    const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
      maxWidth = 16

    const res = ['What   must   be', 'acknowledgment  ', 'shall be        ']

    const result = fullJustify(words, maxWidth)
    expect(result).toEqual(res)
  })
})
