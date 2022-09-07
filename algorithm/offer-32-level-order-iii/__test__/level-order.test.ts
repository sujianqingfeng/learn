import { describe, it, expect } from 'vitest'
import { levelOrder, TreeNode } from '..'

describe('level-order', () => {
  it('1', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const result = levelOrder(root) 
    expect(result).toMatchInlineSnapshot(`
      [
        [
          1,
        ],
        [
          3,
          2,
        ],
      ]
    `)
  })
})
