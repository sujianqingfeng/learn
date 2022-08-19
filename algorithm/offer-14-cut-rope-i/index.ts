//  Offer 14- I. 剪绳子
export function cuttingRope(n:number) {

  const dp = Array(n+1).fill(1)

  for (let i = 3; i < n+1; i++) {
    // 去掉一半
    // 另j<=i/2，并不是因为前后重复了，而是因为前面一定大于后面。
    // 例如
    // 当i=10，j=4时，dp[i]=max(4*6, 4*dp[6])；
    // 当i=10，j=6时，dp[i]=max(6*4, 6*dp[4])，
    // 但是4*dp[6]一定大于等于6*dp[4]，
    // 因为dp[6]=max(2*4, 2*dp[4])>=2*dp[4]，所以4*dp[6]>=8*dp[4]

    for (let j = 1; j <=  ~~(i/2); j++) {
      // j * (i-j) 不剪
      // j * dp[i-j]  剪绳子 dp[i-j] 在之前就已经求过了
      dp[i] = Math.max(dp[i], Math.max(j * (i-j), j * dp[i-j])) 
    }
  }

  return dp[n]
}