import { describe, it, expect } from "vitest";

import { countBinarySubstrings } from "../index";

describe("count-binary-substring", () => {
  it("1", () => {
    const s = "00110011";
    const result = countBinarySubstrings(s);
    expect(result).toEqual(6);
  });
});
