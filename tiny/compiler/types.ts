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
  NumberLiteral = 'NumberLiteral',
  ExpressionStatement = 'ExpressionStatement',
  Identifier = 'Identifier'
}

export type RootNode =  {
  type: NodeTypes.Program
  body:ChildNode[],
  context?:ChildNode[]
}

export type NumberNode =  {
  type: NodeTypes.NumberLiteral
  value:string
}

export type CallExpressionCalleeNode = {
  type: NodeTypes.Identifier,
  name:string
}

export type CallExpressionNode =  {
  type: NodeTypes.CallExpression
  name:string
  params:ChildNode[],
  context?:ChildNode[],
  arguments?:ChildNode[],
  callee?:CallExpressionCalleeNode 
}

export type CallExpressionTransformerNode = {
  type: NodeTypes.CallExpression
}

export type ExpressionStatementNode = {
  type: NodeTypes.ExpressionStatement,
  expression: CallExpressionNode 
}

export type ChildNode = NumberNode | CallExpressionNode | ExpressionStatementNode

export type ParentNode = RootNode | CallExpressionNode | undefined

type HookFn = (node:RootNode|ChildNode, parent?:ParentNode)=>void 

type VisiterHook = {
  enter: HookFn
  exit?:HookFn
}

export type Visitor = {
  Program?:VisiterHook
  CallExpression?:VisiterHook,
  NumberLiteral?:VisiterHook,
  ExpressionStatement?:VisiterHook
  Identifier?:VisiterHook
} 