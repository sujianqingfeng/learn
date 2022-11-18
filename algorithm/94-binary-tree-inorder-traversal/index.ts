import { TreeNode } from '../struct'
//  94. Binary Tree Inorder Traversal
export function inorderTraversal(root:TreeNode | null) {
  const ans = []
  const stk = []
  
  while (root || stk .length) {
    while (root) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()!
    ans.push(root?.val)
    root = root!.right
  }

  return ans
}