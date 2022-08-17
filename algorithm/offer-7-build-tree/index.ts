class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

//  重建二叉树
export function buildTree(preorder:number[], inorder:number[]) {
  if (!preorder.length || !inorder.length) { return null }

  // 前序排序
  // 根左右

  // 中序排序
  // 左根右

  const rootValue = preorder[0]

  const index = inorder.indexOf(rootValue)

  const  treeNode = new TreeNode(rootValue) 

  treeNode.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
  treeNode.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))

  return treeNode
}