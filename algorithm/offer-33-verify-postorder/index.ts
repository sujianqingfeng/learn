// 二叉搜索树的后序遍历序列
export function verifyPostorder(postorder:number[]) {

  let parent = Number.MAX_VALUE
  const stack:number[] = []

  const getLast = (arr:unknown[]) => arr.length - 1

  for (let i = getLast(postorder); i >= 0; i--) {
    const current = postorder[i]

    // 降序 找父节点
    while (stack.length!==0 && stack[getLast(stack)] > current) {
      parent = stack.pop()!
    }

    // 搜索树 左边 < 根
    // 所以当左边的节点 大于 根 不成立 退出
    if (parent < current) {
      return false
    }

    // 升序
    stack.push(current)
  }

  return true
}