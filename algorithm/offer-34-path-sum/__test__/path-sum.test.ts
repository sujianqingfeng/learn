import { describe, it, expect } from 'vitest'
import { pathSum } from '..'
import { TreeNode } from '../../struct'

describe('path-sum', () => {
  it('1', () => {
    const left = new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)))
    const right = new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1)))
    const root = new TreeNode(5, left, right)

    const result = pathSum(root, 22) 
    expect(result).toMatchInlineSnapshot(`
      [
        [
          5,
          4,
          11,
          2,
        ],
        [
          5,
          8,
          4,
          5,
        ],
      ]
    `)
  })
})

