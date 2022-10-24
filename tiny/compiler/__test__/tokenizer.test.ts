import { expect, test } from 'vitest'
import { tokenizer } from '../tokenizer'
import { TokenTypes } from '../types'

test('tokenizer', () => {
  const code = '(add 2 (subtract 4 2))'

  const tokens = [
    { type: TokenTypes.Paren,  value: '('        },
    { type: TokenTypes.Name,   value: 'add'      },
    { type: TokenTypes.Number, value: '2'        },
    { type: TokenTypes.Paren,  value: '('        },
    { type: TokenTypes.Name,   value: 'subtract' },
    { type: TokenTypes.Number, value: '4'        },
    { type: TokenTypes.Number, value: '2'        },
    { type: TokenTypes.Paren,  value: ')'        },
    { type: TokenTypes.Paren,  value: ')'        },
  ]

  const result = tokenizer(code)

  expect(result).toEqual(tokens)
})
