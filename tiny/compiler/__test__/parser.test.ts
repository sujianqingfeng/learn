import { expect, test } from 'vitest'
import { parser } from '../parser'
import { TokenTypes } from '../types'

test('parser', () => {

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

  const result = parser(tokens) 

  expect(result).toMatchInlineSnapshot(`
    {
      "body": [
        {
          "name": "add",
          "params": [
            {
              "type": 2,
              "value": "2",
            },
            {
              "name": "subtract",
              "params": [
                {
                  "type": 2,
                  "value": "4",
                },
                {
                  "type": 2,
                  "value": "2",
                },
              ],
              "type": 1,
            },
          ],
          "type": 1,
        },
      ],
      "type": 0,
    }
  `)
})
