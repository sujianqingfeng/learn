import {  StringLiteral, transform } from '@swc/core'
import { Visitor } from '@swc/core/Visitor'
import type { Program, JSXElement, CallExpression, Argument, Expression, JSXOpeningElement, Node } from '@swc/core'

const notSupport = (n:Node) => {
  throw new Error(`${n.type} is not support`)
}

const transformTag = (n:JSXOpeningElement): StringLiteral => {
  const { name } = n
  switch (name.type) {
    case 'Identifier':
      return {
        type: 'StringLiteral',
        value: name.value,
        span: n.span
      } 
    default:
      return notSupport(n)
  }
}

const wrapperExpression = (arr: Expression[]) => {
  return arr.map((item):Argument => ({ expression: item }))
}

const transformVueJsx = (program: Program) => {

  const transformJSXElement = (n:JSXElement) => {
    // console.log('n', n)
    
    const tag = transformTag(n.opening)
    return {
      type: 'CallExpression',
      arguments: wrapperExpression([tag]),
      callee: {
        type: 'Identifier',
        span: n.span,
        value: 'h',
      },
      span: n.span
    } as CallExpression
  }

  class JsxTransformer extends Visitor {
    visitJSXElement(n: JSXElement): any {
      const expression = transformJSXElement(n)
      return expression
    }
  }

  program = new JsxTransformer().visitProgram(program)
  return program
}

export const transformJsx = async (code:string) => {
  const result =  await transform(code, {
    jsc: {
      target: 'es2022',
      parser: {
        syntax: 'ecmascript',
        jsx: true
      }
    },
    plugin: (m) => transformVueJsx(m)
  })
  return result.code
}