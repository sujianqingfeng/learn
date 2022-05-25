// 414. 第三大的数
export function thirdMax(nums: number[]) {
  let a = Number.MIN_SAFE_INTEGER,
    b = Number.MIN_SAFE_INTEGER,
    c = Number.MIN_SAFE_INTEGER

  for (const n of nums) {
    // 第一大
    if (n > a) {
      c = b
      b = a
      a = n
    } else if (n < a && n > b) {
      // 第二大
      c = b
      b = n
    } else if (n < b && n > c) {
      // 第三大
      c = n
    }
  }

  return c !== Number.MIN_SAFE_INTEGER ? c : a
}
