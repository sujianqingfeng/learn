import { describe, it, expect } from 'vitest'
import { mergeTwoLists, ListNode } from '..'

describe('merge-two-lists', () => {
  it('1', () => {
    const l1= new ListNode(1, new ListNode(2)) 
    const l2= new ListNode(1, new ListNode(2, new ListNode(3))) 
    const result = mergeTwoLists(l1,  l2) 
    expect(result).toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": ListNode {
            "next": ListNode {
              "next": ListNode {
                "next": null,
                "val": 3,
              },
              "val": 2,
            },
            "val": 2,
          },
          "val": 1,
        },
        "val": 1,
      }
    `)
  })
})
