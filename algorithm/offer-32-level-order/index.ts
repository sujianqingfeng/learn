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
// 从上到下打印二叉树 II
export function levelOrder(root:TreeNode) {
  if (!root) { return [] }

  const ans:number[][] = []
  const queue = [root]

  while (queue.length) {
    const size = queue.length
    const temp = []
    for (let i = 0; i < size; i++) {
      const current = queue.shift()
      if (current) {
        temp.push(current.val)
        if (current.left) { queue.push(current.left) }
        if (current.right) { queue.push(current.right) }
      }
    }
    ans.push(temp)
  }

  return ans
}