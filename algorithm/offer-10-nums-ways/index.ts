//  剑指 Offer 10- II. 青蛙跳台阶问题
export function numWays(n:number) {

  if (n<=2) { return n ===0 ? 1 : n }

  let a = 1, b = 2
  for (let i = 3; i <= n; i++) {
    const t = a + b
    a = b
    b = t % 1000000007
  }

  return b
}