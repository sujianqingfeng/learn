import { expect, test } from 'vitest'
import { traverse } from '../traverse'
import { NodeTypes, RootNode, } from '../types'

test('traverse', () => {
  
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
  const result:string[] = []

  traverse(ast, {
    Program: {
      enter(node, parent) {
        result.push(`Program enter node: ${node.type} parent: ${parent?.type}`)
      },
      exit(node, parent) {
        result.push(`Program exit node: ${node.type} parent: ${parent?.type}`)
      },
    },
    NumberLiteral: {
      enter(node, parent) {
        result.push(`NumberLiteral enter node: ${node.type} parent: ${parent?.type}`)
      },
      exit(node, parent) {
          
        result.push(`NumberLiteral exit node: ${node.type} parent: ${parent?.type}`)
      },
    },
    CallExpression: {
      enter(node, parent) {
        result.push(`CallExpression enter node: ${node.type} parent: ${parent?.type}`)
      },
      exit(node, parent) {
          
        result.push(`CallExpression exit node: ${node.type} parent: ${parent?.type}`)
      },
    }
  }) 

  expect(result).toMatchInlineSnapshot(`
    [
      "Program enter node: Program parent: undefined",
      "CallExpression enter node: CallExpression parent: Program",
      "NumberLiteral enter node: NumberLiteral parent: CallExpression",
      "NumberLiteral exit node: NumberLiteral parent: CallExpression",
      "CallExpression enter node: CallExpression parent: CallExpression",
      "NumberLiteral enter node: NumberLiteral parent: CallExpression",
      "NumberLiteral exit node: NumberLiteral parent: CallExpression",
      "NumberLiteral enter node: NumberLiteral parent: CallExpression",
      "NumberLiteral exit node: NumberLiteral parent: CallExpression",
      "CallExpression exit node: CallExpression parent: CallExpression",
      "CallExpression exit node: CallExpression parent: Program",
      "Program exit node: Program parent: undefined",
    ]
  `)
})
