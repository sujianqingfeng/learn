import { describe, it, expect } from "vitest";

import { canConstruct } from "../index";

describe("ransom-note", () => {
  it("1", () => {
    const ransomNote = "aa",
      magazine = "aab";
    const res = true;
    const result = canConstruct(ransomNote, magazine);
    expect(result).toEqual(res);
  });
});
