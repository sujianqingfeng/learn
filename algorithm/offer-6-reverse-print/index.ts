export class ListNode {
  val:number
  next: ListNode | null
  constructor(val?:number, next?:ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// 剑指 Offer 06. 从尾到头打印链表
export function reversePrint(head:ListNode) {
  const dfs = (head:ListNode | null, list:number[]) => {
    if (head === null) { return }
    dfs(head.next, list)
    list.push(head.val)
  }

  const ans:number[] = []
  dfs(head, ans)
  return ans
}