export type ListNode = {
  val: number;
  next?: ListNode | undefined;
};

export function addTwoNumbers(l1?: ListNode, l2?: ListNode) {
  let count = 0;
  const result: ListNode = { val: 0 };
  let cr = result;

  while (l1 || l2) {
    let r = (l1?.val || 0) + (l2?.val || 0) + count;

    if (r > 9) {
      count = 1;
      r = r % 10;
    } else {
      count = 0;
    }

    l1 = l1?.next;
    l2 = l2?.next;

    cr.val = r;
    if (l1 || l2) cr = cr.next = { val: 0 };
  }

  if (count) {
    cr.next = { val: count };
  }

  return result;
}
