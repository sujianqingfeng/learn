import { describe, it, expect } from "vitest"

import { hIndex } from "../index"

describe("h-index", () => {
  it("1", () => {
    const citations = [3, 0, 6, 1, 5]
    const res = 3
    const result = hIndex(citations)
    expect(result).toEqual(res)
  })
})
