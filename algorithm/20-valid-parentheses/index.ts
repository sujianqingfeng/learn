export function isValid(s: string) {
  const map: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  }
  const stack: string[] = []

  for (const ch of s) {
    const last = stack[stack.length - 1]

    const isE = Object.keys(map).find((k) => ch === k)

    if (isE) {
      if (last === map[isE]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(ch)
    }
  }

  return stack.length === 0
}
