
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

//  28. 对称的二叉树
export function isSymmetric(root:TreeNode | null) {

  const recur = (left:TreeNode| null, right:TreeNode| null): boolean  => {
    if (left === null && right ===null) { return true }
    if (left === null || right===null || right.val!==left.val) {
      return false
    }
    return recur(left.left, right.right) && recur(left.right, right.left)
  } 

  return root === null ? true: recur(root.left, root.right)
}