// 299. 猜数字游戏
export function getHint(secret: string, guess: string) {
  const n = secret.length
  let b = 0
  let c = 0
  const bArray = Array(10).fill(0)
  const cArray = Array(10).fill(0)

  for (let i = 0; i < n; i++) {
    const s = secret[i]
    const g = guess[i]

    if (s === g) {
      b++
    } else {
      bArray[+s]++
      cArray[+g]++
    }
  }

  for (let i = 0; i < 10; i++) {
    c += Math.min(bArray[i], cArray[i])
  }

  return `${b}A${c}B`
}
