import { describe, it, expect } from 'vitest'
import { ListNode } from '../../struct'

import { mergeTwoLists } from '../index'

describe('merge-two-list', () => {
  it('1', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const result = mergeTwoLists(list1, list2) 
    expect(result).toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": ListNode {
            "next": ListNode {
              "next": ListNode {
                "next": ListNode {
                  "next": null,
                  "val": 4,
                },
                "val": 4,
              },
              "val": 3,
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
