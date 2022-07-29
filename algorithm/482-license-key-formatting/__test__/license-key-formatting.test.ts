import { describe, it, expect } from "vitest"

import { licenseKeyFormatting } from "../index"

describe.only("license-key-formatting", () => {
  it("1", () => {
    const S = "2-5g-3-J",
      k = 2
    const result = licenseKeyFormatting(S, k)
    expect(result).toEqual("2-5G-3J")
  })

  it("2", () => {
    const S = "5F3Z-2e-9-w",
      k = 4
    const result = licenseKeyFormatting(S, k)
    expect(result).toEqual("5F3Z-2E9W")
  })
})
