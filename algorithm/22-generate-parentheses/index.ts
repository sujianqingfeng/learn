// 22. 括号生成
export function generateParentheses(n:number) {
  const dp = Array.from(new Array(n+1), ():string[] => []) 
  dp[0].push('')
  
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      const l = dp[j]
      const r = dp[i-1-j]
      for (const x of l) {
        for (const y of r) {
          dp[i].push(`(${x})${y}`)
        }
      }
    }
  }
  // console.log(dp)

  return dp[n]
}