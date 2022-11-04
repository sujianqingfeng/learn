import { JSXOpeningElement, transform } from '@swc/core'
import { Visitor } from '@swc/core/Visitor'
import type { Program, JSXElement, CallExpression } from '@swc/core'

const transformTag = (n:JSXOpeningElement) => {
  const { name } = n
  if (name.type === 'Identifier') {
    return {
      type: 'StringLiteral',
      value: name.value,
      hasEscape: false,
      span: n.span
    }
  }
}

const transformVueJsx = (program: Program) => {

  const transformJSXElement = (n:JSXElement) => {
    console.log('n', n)
    
    const tag = transformTag(n.opening)
    return {
      type: 'CallExpression',
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