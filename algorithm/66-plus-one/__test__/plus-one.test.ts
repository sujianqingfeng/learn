import { describe, it, expect } from "vitest"

import { plusOne } from "../index"

describe("plus-one", () => {
  it("1", () => {
    const digits = [1, 2, 3]
    const res = [1, 2, 4]
    const result = plusOne(digits)
    expect(result).toEqual(res)
  })
})
