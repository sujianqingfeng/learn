import { describe, it, expect } from 'vitest'
import { isSymmetric, TreeNode } from '..'

describe('is-symmetric', () => {
  it('1', () => {
    const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3))) 
    const result = isSymmetric(tree) 
    expect(result).toEqual(true)
  })
})
