// 剑指 Offer 10- I. 斐波那契数列
export function fib(n:number) {
  const mod = 1000000007

  const ans = [0, 1]
  if (n>=2) {
    for (let i = 2; i <=n; i++) {
      ans[i] = (ans[i-1] + ans[i-2]) % mod
    }
  }

  return ans[n]
}