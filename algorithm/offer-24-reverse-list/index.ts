export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// Offer 24. 反转链表
export function reverseList(head:ListNode | null) {
  let cur = head, prev = null

  while (cur) {
    const temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }

  return prev
}