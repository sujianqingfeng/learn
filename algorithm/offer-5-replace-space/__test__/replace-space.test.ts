import { describe, it, expect } from "vitest"

import { replaceSpace } from "../index"

describe("replace-space", () => {
  it("1", () => {
    const s = "We are happy."

    const result = replaceSpace(s)
    expect(result).toEqual("We%20are%20happy.")
  })
})
