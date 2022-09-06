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

// i. 从上到下打印二叉树
export function levelOrder(root: TreeNode | null) {
  if (!root) { return [] }

  const ans:number[] = []
  const queue = [root]
  
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const current = queue.shift()
      ans.push(current!.val)
      if (current?.left) { queue.push(current.left) }
      if (current?.right) { queue.push(current.right) }
    }
  }

  return ans
}