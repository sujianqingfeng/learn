import { describe, it, expect } from "vitest"

import { originalDigits } from "../index"

describe("original-digits", () => {
  it("1", () => {
    const s = "owoztneoer"
    const res = "012"
    const result = originalDigits(s)
    expect(result).toEqual(res)
  })
})
