import { test, expect } from "vitest"

import { isPowerOfFour } from "../index"

test("power-of-four", () => {
  const n = 5
  const result = isPowerOfFour(n)
  expect(result).toEqual(false)
})
