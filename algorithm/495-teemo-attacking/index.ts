// 495. 提莫攻击
export function findPoisonedDuration(timeSeries: number[], duration: number) {
  let res = 0,
    last = -1

  for (const num of timeSeries) {
    // 结束的位置
    const end = num + duration - 1

    // last < num 没有重合
    // last >num 有重合
    res += last < num ? duration : end - last

    // 记录下一次结束的位置
    last = end
  }

  return res
}
