import { describe, it, expect } from "vitest";

import { myAtoi } from "../index";

describe("string-to-integer-atoi", () => {
  it("1", () => {
    const x = "  -4193 with words";
    const result = myAtoi(x);
    expect(result).toBe(-4193);
  });

  it("2", () => {
    const x = "-91283472332";
    const result = myAtoi(x);
    expect(result).toBe(-2147483648);
  });
});
