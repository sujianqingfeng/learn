import { describe, it, expect } from "vitest";

import { reverseWords } from "../index";

describe("reverse-words", () => {
  it("1", () => {
    const s = "the sky is blue";
    const res = "blue is sky the";
    const result = reverseWords(s);
    expect(result).toBe(res);
  });
});
