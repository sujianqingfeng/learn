export function reverseWords(s:string) {
  s = s.trim()
  
  let j = s.length - 1, i = j
  const ans = []

  while (i>=0) {
    while (i>=0 && s[i]!==' ') {
      i--
    }
    ans.push(`${s.substring(i+1, j+1)} `)
    while (i>=0 && s[i] ===' ') {
      i--
    }
    j = i
  }

  return ans.join('').trim()
}