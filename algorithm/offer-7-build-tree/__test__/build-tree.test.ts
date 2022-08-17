import { describe, it, expect } from 'vitest'

import { buildTree } from '../index'

describe('build-tree', () => {
  it('1', () => {
    const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
    const result = buildTree(preorder, inorder)
    expect(result).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": null,
          "right": null,
          "val": 9,
        },
        "right": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 15,
          },
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 7,
          },
          "val": 20,
        },
        "val": 3,
      }
    `)
  })
})
