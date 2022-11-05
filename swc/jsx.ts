import { transform } from '@swc/core'
import { Visitor } from '@swc/core/Visitor'
import type {
  ArrayExpression, 
  ExprOrSpread, 
  JSXElementChild,
  ObjectExpression, 
  StringLiteral,
  Property, 
  Program,
  JSXElement,
  CallExpression,
  Argument,
  Expression,
  JSXOpeningElement,
  Node 
} from '@swc/core'

const notSupport = (n:Node) => {
  throw new Error(`${n.type} is not support`)
}

const wrapperExpression = (arr: Expression[]) => {
  return arr.map((item):Argument => ({ expression: item }))
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

const transformJSXAttributes = (opening:JSXOpeningElement):ObjectExpression | undefined => {
  if (!opening.attributes) { return }

  const propertyMap:Map<StringLiteral, Expression> = new Map()

  for (const attribute of opening.attributes) {
    if (attribute .type ==='JSXAttribute') {
      if (attribute.name.type === 'Identifier') {
        if (attribute.value?.type === 'StringLiteral') {
          const key = {
            type: 'StringLiteral',
            value: attribute.name.value,
            span: attribute.name.span
          } as StringLiteral

          propertyMap.set(key, attribute.value)
        }
      }
    }
  }

  const properties:Property[] = []
  for (const [key, value] of  propertyMap.entries()) {
    const property  = {
      type: 'KeyValueProperty',
      key,
      value
    } as Property 
    properties.push(property)
  }

  return {
    type: 'ObjectExpression',
    properties,
    span: opening.span
  }
}

const transformChildren = (children:JSXElementChild[]) => {
  // console.log('children', children)
  const list = []
  
  for (const child of children) {
    if (child.type === 'JSXText') {
      const text =  {
        type: 'StringLiteral',
        value: child.value,
        span: child.span
      } as StringLiteral

      list.push(text)
    }
  }
  return list
}

const transformVueJsx = (program: Program) => {

  const transformJSXElement = (n:JSXElement) => {
    // console.log('n', n)
    
    // tag
    const tag = transformTag(n.opening)

    // attrs
    const attrs:Expression[] =[tag]
    if (n.opening.attributes) {
      const attributes = transformJSXAttributes(n.opening)
      if (attributes ) {
        attrs.push(attributes )
      }
    }

    // children
    const children = transformChildren(n.children)

    if (children.length) {
      attrs.push({
        type: 'ArrayExpression',
        elements: children.map(child => ({ expression: child } as ExprOrSpread)),
        span: n.span
      } as ArrayExpression)
    }

    return {
      type: 'CallExpression',
      arguments: wrapperExpression(attrs),
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