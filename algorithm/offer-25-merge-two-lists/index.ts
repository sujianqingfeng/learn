export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
// 合并两个排序的链表
export function mergeTwoLists(l1:ListNode | null, l2:ListNode | null) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val<l2.val) {
    l1.next = mergeTwoLists(l1.next, l2) 
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

