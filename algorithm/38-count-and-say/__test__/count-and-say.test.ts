import { describe, it, expect } from "vitest"

import { countAndSay } from "../index"

describe("count-and-say", () => {
  it("1", () => {
    const n = 4
    const res = "1211"
    const result = countAndSay(n)
    expect(result).toEqual(res)
  })
})
