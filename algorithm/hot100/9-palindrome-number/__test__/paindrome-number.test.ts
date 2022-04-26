import { describe, it, expect } from "vitest";

import { isPalindrome } from "../index";

describe("palindrome-number", () => {
  it("2", () => {
    const x = 121;
    const result = isPalindrome(x);
    expect(result).toBeTruthy();
  });
});
