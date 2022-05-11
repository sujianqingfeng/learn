export function isPalindrome(x: number) {
  if (x < 0) return false;

  let d = 1;

  // 获取除数
  while (x / d > 10) {
    d *= 10;
  }

  while (x > 0) {
    const l = ~~(x / d);
    const r = x % 10;

    if (l !== r) return false;
    // 先取模 去掉左边 然后/10去掉后边 然后取整
    x = ~~((x % d) / 10);
    // 左右各取了一位  所以是100
    d /= 100;
  }

  return true;
}
