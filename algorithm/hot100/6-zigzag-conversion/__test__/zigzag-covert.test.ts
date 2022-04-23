import { describe, it, expect } from "vitest";

import { convert } from "../index";

describe("zigzag-covert", () => {
  it("1", () => {
    const s = "PAYPALISHIRING";
    const result = convert(s, 3);
    expect(result).toBe("PAHNAPLSIIGYIR");
  });
});
