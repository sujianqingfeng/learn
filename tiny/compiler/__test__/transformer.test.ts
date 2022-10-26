import { expect, test } from 'vitest'
import { transformer } from '../transformer'
import { NodeTypes, RootNode, } from '../types'

test('transformer', () => {
  
  const ast:RootNode = {
    type: NodeTypes.Program,
    body: [
      {
        type: NodeTypes.CallExpression,
        name: 'add',
        params: [
          {
            type: NodeTypes.NumberLiteral,
            value: '2'
          },
          {
            type: NodeTypes.CallExpression,
            name: 'subtract',
            params: [
              {
                type: NodeTypes.NumberLiteral,
                value: '4',
              },
              {
                type: NodeTypes.NumberLiteral,
                value: '2',
              }
            ]
          }
        ]
      }
    ]

  }

  const result = transformer(ast)

  expect(result).toMatchInlineSnapshot(`
    {
      "body": [
        {
          "expression": {
            "arguments": [
              {
                "type": "NumberLiteral",
                "value": "2",
              },
              {
                "arguments": [
                  {
                    "type": "NumberLiteral",
                    "value": "4",
                  },
                  {
                    "type": "NumberLiteral",
                    "value": "2",
                  },
                ],
                "callee": {
                  "name": "subtract",
                  "type": "Identifier",
                },
                "context": [],
                "name": "subtract",
                "params": [],
                "type": "CallExpression",
              },
            ],
            "callee": {
              "name": "add",
              "type": "Identifier",
            },
            "context": [],
            "name": "add",
            "params": [],
            "type": "CallExpression",
          },
          "type": "ExpressionStatement",
        },
      ],
      "context": [],
      "type": "Program",
    }
  `)
})
