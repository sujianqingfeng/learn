import { describe, it, expect } from 'vitest'
import { mirrorTree, TreeNode } from '..'

describe('mirror-tree', () => {
  it('1', () => {
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3)) 
    const result = mirrorTree(tree) 
    expect(result).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": null,
          "right": null,
          "val": 3,
        },
        "right": TreeNode {
          "left": null,
          "right": null,
          "val": 2,
        },
        "val": 1,
      }
    `)
  })
})
