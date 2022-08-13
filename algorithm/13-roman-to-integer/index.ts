
export function romanToInt(s:string) {

  const map:Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let i = 0, res = 0
  const l = s.length

  while (i<l) {
    const cur = map[s[i]]
    if (i< l-1 && cur< map[s[i+1]]) {
      res-=cur
    } else {
      res+=cur
    }
    // console.log(cur,res);
    i++
  }

  return res
}
