export type ListNode = {
  val: number;
  next?: ListNode | undefined;
};

// 剑指 Offer 18. 删除链表的节点
export function deleteNode(head:ListNode, val:number) {

  if (head.val === val) { return head.next }

  let pre = head, cur = head.next
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
      break
    }
    pre = cur
    cur = cur.next
  }

  return head
}