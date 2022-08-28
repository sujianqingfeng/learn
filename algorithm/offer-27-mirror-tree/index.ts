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

// 27. 二叉树的镜像
export function mirrorTree(root:TreeNode | null) {
  if (root === null) { return null }
  const temp = root.left
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(temp)
  return root
}