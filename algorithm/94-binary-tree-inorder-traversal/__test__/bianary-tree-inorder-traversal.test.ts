import { describe, it, expect } from 'vitest'
import { TreeNode } from '../../struct'

import { inorderTraversal } from '../index'

describe('inorder-traversal', () => {
  it('1', () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(4))
    
    const result  = inorderTraversal(root)
    expect(result  ).toMatchInlineSnapshot(`
      [
        3,
        2,
        1,
        4,
      ]
    `)
  })
})
