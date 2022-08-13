// 423. 从英文中重建数字
export function originalDigits(s: string) {
  const mp = new Map()
  for (const ch of s) {
    mp.set(ch, (mp.get(ch) || 0) + 1)
  }
  // z, w, u, x, g
  // 0, 2, 4, 6, 8

  const ret = new Array(10).fill(0)
  ret[0] = mp.get('z') || 0
  ret[2] = mp.get('w') || 0
  ret[4] = mp.get('u') || 0
  ret[6] = mp.get('x') || 0
  ret[8] = mp.get('g') || 0

  // h 只在 3, 8 中出现
  // f 只在 4, 5 中出现
  // s 只在 6, 7 中出现
  ret[3] = (mp.get('h') || 0) - ret[8]
  ret[5] = (mp.get('f') || 0) - ret[4]
  ret[7] = (mp.get('s') || 0) - ret[6]
  // o 只在 0, 1, 2, 4 中出现
  ret[1] = (mp.get('o') || 0) - ret[0] - ret[2] - ret[4]
  //i 只在 5 6 8 9 中出现
  ret[9] = (mp.get('i') || 0) - ret[5] - ret[6] - ret[8]

  const ans = []
  for (let i = 0; i < ret.length; i++) {
    const count = ret[i]
    for (let j = 0; j < count; j++) {
      ans.push(i)
    }
  }

  return ans.join('')
}
