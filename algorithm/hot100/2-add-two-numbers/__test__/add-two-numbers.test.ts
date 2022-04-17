import { describe, it, expect } from "vitest";

import { addTwoNumbers, ListNode } from "../index";

describe("addTwoNumbers", () => {
  it("1", () => {
    const l1: ListNode = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 5,
        },
      },
    };

    const l2: ListNode = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
        },
      },
    };

    const result = addTwoNumbers(l1, l2);

    const r: ListNode = {
      val: 7,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 1,
          },
        },
      },
    };

    expect(result).toEqual(r);
  });
});
