import { CallExpressionNode, NodeTypes, NumberNode, RootNode, Token, TokenTypes } from './types'

const createRootNode = ():RootNode => {
  return {
    type: NodeTypes.Program,
    body: []
  }
}

const createNumberNode = (value: string):NumberNode => {
  return {
    type: NodeTypes.NumberLiteral,
    value
  }
}

const createCallExpressionNode = (name:string) :CallExpressionNode => {
  return {
    type: NodeTypes.CallExpression,
    name,
    params: []
  }
}

export function parser(tokens:Token[]) {
  const rootNode = createRootNode()

  let current = 0
  let token = tokens[current]

  const walk = () => {
    if (token.type === TokenTypes.Number) {
      current++
      return createNumberNode(token.value)
    }

    if (token.type === TokenTypes.Paren && token.value === '(') {
      // 跳过括号(
      token = tokens[++current]
      const node = createCallExpressionNode(token.value)
      // 跳过 方法名
      token = tokens[++current]
      while (!(token.type === TokenTypes.Paren && token.value ===')')) {
        node.params.push(walk())
        // walk 可能会更新 current
        token = tokens[current]
      }
      // 跳过括号 ）
      current++
      return node
    }

    throw new TypeError(`missing type: ${token.type}`)
  }

  while (current<tokens.length) {
    rootNode.body.push(walk())
  }

  return rootNode
}