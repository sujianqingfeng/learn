import { describe, it, expect } from "vitest";

import { intToRoman } from "../index";

describe("integer-to-roman", () => {
  it("1", () => {
    const num= 1994 
    const result = intToRoman(num);
    expect(result).toBe('MCMXCIV');
  });


  it("2", () => {
    const num= 10
    const result = intToRoman(num);
    expect(result).toBe('X');
  });
});
