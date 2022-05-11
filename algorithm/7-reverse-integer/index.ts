export function reverse(x: number) {
  let res = 0;

  while (x != 0) {
    const n = x % 10;
    res = res * 10 + n;
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
    // ~~ 位运算 -> parseInt
    x = ~~(x / 10);
  }

  return res;
}
