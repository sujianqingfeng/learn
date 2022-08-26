import { describe, it, expect } from 'vitest'
import { getKthFromEnd, ListNode } from '..'

describe('get-kth-from-end', () => {
  it('1', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))) 
    const result = getKthFromEnd(head,  2) 
    expect(result).toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": null,
          "val": 4,
        },
        "val": 3,
      }
    `)
  })
})
