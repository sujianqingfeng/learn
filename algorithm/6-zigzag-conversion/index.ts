// 通过模拟

export function convert(s: string, numRows: number) {
  if (numRows <= 1) { return s }

  const store = new Map()
  for (let i = 0; i < numRows; i++) { store.set(i, []) }

  let flag = 1
  let index = 0

  for (const char of s) {
    store.get(index).push(char)
    index = index + flag
    if (index === 0 || index === numRows - 1) { flag = -flag }
  }

  let result: string[] = []
  for (let i = 0; i < numRows; i++) { result = result.concat(store.get(i)) }

  return result.join('')
}
