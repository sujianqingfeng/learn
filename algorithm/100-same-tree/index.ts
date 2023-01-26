import { TreeNode } from '../struct'

export function isSameTree(p:TreeNode | null, q:TreeNode | null): boolean {
  if (p === q && q===null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  if (p.val!==q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}