// 58. 最后一个单词的长度
export function lenthOfLastWord(s: string) {
  const n = s.length
  let j = n - 1

  // 从后面开始遍历 先确定j的位置  找到最后不为空的位置
  while (0 <= j && s[j] === ' ') { j-- }
  // 然后i 从j的位置 向前找 直到为空就停下
  let i = j
  while (0 <= i && s[i] !== ' ') { i-- }

  return j - i
}
