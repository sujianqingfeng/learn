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
  Program,
  CallExpression,
  NumberLiteral
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