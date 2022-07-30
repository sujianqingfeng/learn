// 68. 文本左右对齐
export function fullJustify(words: string[], maxWidth: number) {
  const n = words.length
  let i = 1,
    tempWords = [words[0]],
    tempLength = words[0].length

  const ans: string[] = []

  while (i < n) {
    const current = words[i]
    const currentLength = current.length

    // 加一  至少有一个空格
    if (tempLength + (currentLength + 1) <= maxWidth) {
      tempWords.push(current)
      tempLength += currentLength + 1
    } else {
      ans.push(full(tempWords, tempLength, maxWidth))
      tempWords = [current]
      tempLength = currentLength
    }
    i++
  }

  // 最后一行
  ans.push(tempWords.join(" ").padEnd(maxWidth, " "))

  return ans

  function full(tempWords: string[], tempLength: number, maxWidth: number) {
    const n = tempWords.length
    // 只有一个
    if (n === 1) return tempWords[0].padEnd(maxWidth, " ")

    // 空格区间数量
    const spaceIntervalNum = n - 1

    // 剩余空格数量
    const spaceTotal = maxWidth - tempLength

    // 每个区间的至少多少个
    const spaceIntervalItemNum = Math.floor(spaceTotal / spaceIntervalNum)

    // 存放空格
    const spaces = Array(spaceIntervalNum).fill(" ")

    spaces.forEach((space, index) => {
      spaces[index] = space + " ".repeat(spaceIntervalItemNum)
    })

    // 剩余空格
    let remainSpace = spaceTotal % spaceIntervalNum
    // 如果有多的空格 就从左边往右一次添加
    while (remainSpace) {
      spaces[--remainSpace] += " "
    }
    // 因为跟 tempWord 数量对不上 所以加一个
    spaces.push("")

    const line = spaces.reduce((p, c, i) => {
      return p + tempWords[i] + c
    }, "")

    return line
  }
}
