import { describe, it, expect } from "vitest"

import { findRelativeRanks } from "../index"

describe("relative-ranks", () => {
  it("1", () => {
    const score = [5, 4, 3, 2, 1]
    const res = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
    const result = findRelativeRanks(score)
    expect(result).toEqual(res)
  })
})
