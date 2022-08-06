import { test, expect } from "vitest"

import { isPowerThree } from "../index"

test("power-of-three", () => {
  const n = 27
  const result = isPowerThree(n)
  expect(result).toEqual(true)
})
