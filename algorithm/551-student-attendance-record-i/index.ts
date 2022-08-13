// 551. 学生出勤记录 I
export function checkRecord(s: string) {
  let a = 0
  const n = s.length

  for (let i = 0; i < n; i++) {
    const ch = s[i]

    if (ch === 'A') {
      a++
      if (a >= 2) {
        return false
      }
    } else if (ch === 'L') {
      let j = i
      while (j < n && s[j] === 'L') {
        j++
      }

      const count = j - i
      if (count >= 3) {
        return false
      }
      i = j - 1
      continue
    }
  }

  return true
}
