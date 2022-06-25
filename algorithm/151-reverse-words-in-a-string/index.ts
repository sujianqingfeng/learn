// 151. 颠倒字符串中的单词
export function reverseWords(s: string) {
  // \s 空白字符串
  const splits = s.trim().split(/\s+/);

  let l = 0,
    r = splits.length - 1;

  for (; l < r; l++, r--) {
    [splits[l], splits[r]] = [splits[r], splits[l]];
  }

  return splits.join(" ");
}
