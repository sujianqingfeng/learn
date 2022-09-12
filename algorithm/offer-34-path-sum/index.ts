import { TreeNode } from '../struct'

export function pathSum(root:TreeNode | null, target:number) {
  const path:number[] = []
  const ans:number[][] = []

  const recur = (root:TreeNode | null, target:number) => {
    if (!root) { return } 

    path.push(root.val)
    target-=root.val

    if (target === 0 && root.left === null && root.right === null) {
      ans.push([...path])
    }
    recur(root.left, target)
    recur(root.right, target)
    path.pop()
  }

  recur(root, target)
  return ans
}