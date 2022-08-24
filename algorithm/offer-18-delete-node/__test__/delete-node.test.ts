import { describe, it, expect } from 'vitest'

import { deleteNode, ListNode } from '../index'

describe('delete-node', () => {
  it('1', () => {

    const head:ListNode = {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 1,
          next: {
            val: 9
          }
        }
      }
    }

    const result = deleteNode(head, 5) 
    expect(result).toMatchInlineSnapshot(`
      {
        "next": {
          "next": {
            "val": 9,
          },
          "val": 1,
        },
        "val": 4,
      }
    `)
  })
})
