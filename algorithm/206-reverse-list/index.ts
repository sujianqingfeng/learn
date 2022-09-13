import { ListNode } from '../struct'
export { ListNode }

// 反转链表
export function reverseList(head:ListNode | null) {
  let cur = null, pre = head

  while (pre) {
    const t = pre.next
    pre.next = cur
    cur = pre
    pre = t
  }

  return cur 
}
