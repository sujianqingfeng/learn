import { describe, it, expect } from "vitest";

import { maxArea } from "../index";

describe("container-with-most-water", () => {
  it("1", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = maxArea(height);
    expect(result).toBe(49);
  });
});
