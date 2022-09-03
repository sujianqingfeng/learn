import { describe, it, expect } from 'vitest'

import { isSubStructure, TreeNode } from '../index'

describe('is-sub-structure', () => {
  it('1', () => {
    const B = new TreeNode(4, new TreeNode(1))
    const A = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5))

    const result = isSubStructure(A, B) 
    expect(result).toEqual(true)
  })

})
