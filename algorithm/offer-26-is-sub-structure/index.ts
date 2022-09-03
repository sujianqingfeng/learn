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

// 树的子结构
export function isSubStructure(A:TreeNode | null, B:TreeNode | null) :boolean {

  const recur = (x:TreeNode | null, y:TreeNode | null):boolean => {
    
    if (!y) { return true }
    if (!x || x.val !== y.val) {
      return false
    }
    return recur(x.left, y.left) && recur(x.right, y.right)
  }

  return (A!==null && B!==null) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
}