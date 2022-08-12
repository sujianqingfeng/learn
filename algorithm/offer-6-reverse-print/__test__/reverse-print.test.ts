import { describe, it, expect } from "vitest"

import { reversePrint,ListNode } from "../index"

describe("reverse-print", () => {
  it("1", () => {
    const head = new ListNode(1,new ListNode(3,new ListNode(2)))
    const result = reversePrint(head)
    expect(result).toEqual([2,3,1])
  })
})
