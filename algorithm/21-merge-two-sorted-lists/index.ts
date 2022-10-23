import { ListNode } from '../struct'
// 21: Merge Two Sorted Lists
export function mergeTwoLists(list1:ListNode | null, list2: ListNode | null) {
  // 每次返回已经排好的链表
  if (list1 === null) {
    return list2
  }
  if (list2 === null) {
    return list1
  }
  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next) 
    return list2
  } else {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }
}