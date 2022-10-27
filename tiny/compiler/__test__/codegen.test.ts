import { expect, test } from 'vitest'
import { codegen } from '../codegen'
import { NodeTypes, RootNode, } from '../types'

test('codegen', () => {
  const ast:RootNode = 
    {
      'body': [
        {
          'expression': {
            'arguments': [
              {
                'type': NodeTypes.NumberLiteral,
                'value': '2',
              },
              {
                'arguments': [
                  {
                    'type': NodeTypes.NumberLiteral,
                    'value': '4',
                  },
                  {
                    'type': NodeTypes.NumberLiteral,
                    'value': '2',
                  },
                ],
                'callee': {
                  'name': 'subtract',
                  'type': NodeTypes.Identifier,
                },
                'context': [],
                'name': 'subtract',
                'params': [],
                'type': NodeTypes.CallExpression,
              },
            ],
            'callee': {
              'name': 'add',
              'type': NodeTypes.Identifier,
            },
            'name': 'add',
            'params': [],
            'type': NodeTypes.CallExpression,
          },
          'type': NodeTypes.ExpressionStatement,
        },
      ],
      'type': NodeTypes.Program,
    }

  const result = codegen(ast)

  expect(result).toMatchInlineSnapshot('"add(2, subtract(4, 2));"')
})
