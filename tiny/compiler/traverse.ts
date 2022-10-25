import {  ChildNode, NodeTypes, RootNode, Visitor } from './types'

export function traverse(rootNode:RootNode, visitor?:Visitor) {

  function traverseArray(children:ChildNode[], parent:ChildNode | RootNode) {
    children.forEach(child => {
      traverseNode(child, parent)
    })
  }

  function traverseNode(node:RootNode | ChildNode, parent?: ChildNode | RootNode) {

    const methods = visitor?.[node.type] 
    if (methods && methods.enter) {
      methods.enter(node, parent)
    }

    switch (node.type) {
      case NodeTypes.Program:
        traverseArray(node.body, node)
        break
      case NodeTypes.NumberLiteral:
        break
      case NodeTypes.CallExpression:
        traverseArray(node.params, node)
        break
    }

    if (methods && methods.exit) {
      methods.exit(node, parent)
    }
  }

  traverseNode(rootNode)
}