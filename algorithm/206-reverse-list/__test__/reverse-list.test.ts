import { describe, it, expect } from 'vitest'

import { reverseList, ListNode } from '../index'

describe('reverse-list', () => {
  it('1', () => {
    
    const head = new ListNode(1, new ListNode(2, new ListNode(3)))
    const result =  reverseList(head)

    expect(result).toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": ListNode {
            "next": null,
            "val": 1,
          },
          "val": 2,
        },
        "val": 3,
      }
    `)
  })
})

