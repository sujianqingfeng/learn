import { describe, it, expect } from "vitest"

import { mySqrt } from "../index"

describe("min-window", () => {
  it("1", () => {
    const x = 8
    const result = mySqrt(x)
    expect(result).toEqual(2)
  })
})
