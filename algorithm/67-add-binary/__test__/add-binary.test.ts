import { describe, it, expect } from "vitest"

import { addBinary } from "../index"

describe("add-binary", () => {
  it("1", () => {
    const a = "11",
      b = "1"
    const result = addBinary(a, b)
    expect(result).toEqual("100")
  })
})
