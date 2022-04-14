import { describe, test, expect } from "vitest";

import deepClone from "../deepClone";

describe("test deep clone", () => {
  test("test object", () => {
    const a = { b: 1, c: 2 };
    const b = deepClone(a);
    expect(a).toEqual(b);
  });

  test("test array", () => {
    const a = [1, 2, 3, 4];
    const b = deepClone(a);
    expect(a).toEqual(b);
  });

  test("test object and array", () => {
    const a = { a: 1, b: [1, 2, 3, { d: 4 }] };
    const b = deepClone(a);
    expect(a).toEqual(b);
  });
});
