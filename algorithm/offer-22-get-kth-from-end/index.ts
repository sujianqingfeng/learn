export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// 链表中倒数第k个节点
export function getKthFromEnd(head:ListNode | null, k:number) {
  let first:any = head, end:any = head

  for (let i = 0; i < k; i++) {
    first = first.next
  }

  while (first) {
    first = first.next
    end = end.next
  }

  return end
}

