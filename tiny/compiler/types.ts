export enum TokenTypes{
  Paren,
  Name,
  Number
}

export interface Token {
  type: TokenTypes,
  value:string
}

export enum NodeTypes{
  Program = 'Program',
  CallExpression = 'CallExpression',
  NumberLiteral = 'NumberLiteral'
}

export type RootNode =  {
  type: NodeTypes.Program
  body:ChildNode[]
}

export type NumberNode =  {
  type: NodeTypes.NumberLiteral
  value:string
}

export type CallExpressionNode =  {
  type: NodeTypes.CallExpression
  name:string
  params:ChildNode[]
}

export type ChildNode = NumberNode | CallExpressionNode

type VisiterHook = {
  enter:(node:RootNode|ChildNode, parent:RootNode | ChildNode | undefined)=>void
  exit:(node:RootNode|ChildNode, parent:RootNode  | ChildNode | undefined)=>void
}

export type Visitor = {
  Program?:VisiterHook
  CallExpression?:VisiterHook,
  NumberLiteral?:VisiterHook
} 