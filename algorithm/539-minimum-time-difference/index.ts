// 539. 最小时间差
export function findMinDifference(timePoints: string[]) {
  if (timePoints.length > 1440) {
    return 0
  }

  const getM = (str: string) => {
    const [h, m] = str.split(":")
    return +h * 60 + +m
  }
  timePoints.sort()

  let ans = Number.MAX_VALUE

  const t0 = getM(timePoints[0])
  let pre = t0

  for (let i = 1; i < timePoints.length; i++) {
    const c = getM(timePoints[i])

    ans = Math.min(ans, c - pre)
    pre = c
  }
  // 首位时间
  ans = Math.min(ans, t0 + 1440 - pre)

  return ans
}
