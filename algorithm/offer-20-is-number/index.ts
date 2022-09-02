//  20. 表示数值的字符串
export function isNumber(s:string) {
  // 状态转换
  const state:Record<string, number>[] = [
    { b: 0, s: 1, d: 2, '.': 4 },
    { d: 2, '.': 4, },
    { d: 2, '.': 3, e: 5, b: 8 },
    { d: 3, e: 5, b: 8 },
    { d: 3 },
    { s: 6, d: 7 },
    { d: 7 },
    { d: 7, b: 8 },
    { b: 8 }
  ]

  let p = 0
  
  for (const char of s) {
    let t = '?'
    if (char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57) {
      t = 'd'
    } else if (char === ' ') { 
      t ='b'
    } else if (char === '.') {
      t = '.'
    } else if (['+', '-'].includes(char)) {
      t = 's'
    } else if (['e', 'E'].includes(char)) {
      t = 'e'
    }

    const next = state[p]
    if (!next) { return false }
    p = next[t]
    
  }

  return [2, 3, 7, 8].includes(p)
}