import { describe, it, expect } from "vitest"

import { convertToBase7 } from "../index"

describe("base-7", () => {
  it("1", () => {
    const num = -7
    const result = convertToBase7(num)
    expect(result).toEqual("-10")
  })
})
