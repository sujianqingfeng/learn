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
          "arguments": [],
          "context": [],
          "name": "add",
          "params": [
            {
              "type": "NumberLiteral",
              "value": "2",
            },
            {
              "arguments": [],
              "context": [],
              "name": "subtract",
              "params": [
                {
                  "type": "NumberLiteral",
                  "value": "4",
                },
                {
                  "type": "NumberLiteral",
                  "value": "2",
                },
              ],
              "type": "CallExpression",
            },
          ],
          "type": "CallExpression",
        },
      ],
      "context": [],
      "type": "Program",
    }
  `)
})
