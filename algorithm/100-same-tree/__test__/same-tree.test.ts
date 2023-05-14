import { describe, it, expect } from 'vitest'
import { TreeNode } from '../../struct'

import { isSameTree } from '../index'

describe('is-same-tree', () => {
  it('1', () => {
    const p= new TreeNode(1, new TreeNode(2), new TreeNode(3)) 
    const q= new TreeNode(1, new TreeNode(2), new TreeNode(3)) 
    
    const result = isSameTree(p, q) 
    expect(result).toBeTruthy()
  })
})
