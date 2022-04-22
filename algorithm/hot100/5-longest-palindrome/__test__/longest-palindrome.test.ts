import { describe, it, expect } from "vitest";

import { longestPalindrome } from "../index";

describe("longestPalindrome", () => {
  it("1", () => {
    const s = "babad";
    const result = longestPalindrome(s);
    expect(result).toBe("bab");
  });

  it("2", () => {
    const s = "cbbd";
    const result = longestPalindrome(s);
    expect(result).toBe("bb");
  });
});
