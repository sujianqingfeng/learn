import { createCallExpressionNode, createNumberNode, createRootNode } from './parser'
import { traverse } from './traverse'
import { CallExpressionCalleeNode, CallExpressionNode, ExpressionStatementNode, NodeTypes, RootNode } from './types'

const createExpressionStatementNode = (expression:CallExpressionNode): ExpressionStatementNode => {
  return {
    type: NodeTypes.ExpressionStatement,
    expression
  }
}

const createCallExpressionCalleeNode = (name:string):CallExpressionCalleeNode => {
  return {
    type: NodeTypes.Identifier,
    name
  }
}

export function transformer(ast:RootNode) {
  const newAst = createRootNode()

  ast.context = newAst.body

  traverse(ast, {
    CallExpression: {
      enter(node, parent) {
        if (node.type === NodeTypes.CallExpression) {

          let expression:CallExpressionNode | ExpressionStatementNode =  createCallExpressionNode(node.name)

          expression.callee = createCallExpressionCalleeNode(node.name)
          node.context = expression.arguments

          if (parent?.type!== NodeTypes.CallExpression) {
            expression  = createExpressionStatementNode(expression)
          }
          parent?.context?.push(expression)
        }
      },
    },
    NumberLiteral: {
      enter(node, parent) {
        if (node.type === NodeTypes.NumberLiteral) {
          const numberNode =  createNumberNode(node.value)
          parent?.context.push(numberNode)
        }
      }
    }
  })

  return newAst
}