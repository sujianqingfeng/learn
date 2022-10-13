// 56. 合并区间
export function merge(intervals: number[][]):number[][] {
  intervals = intervals.sort((one, two) => one[0]- two[0])

  const ans:number[][] = [intervals[0]]
  for (const interval of intervals) {
    const ansLen = ans.length
    const last = ansLen-1 
    if (ans[last][1]<interval[0]) {
      ans.push(interval)
    } else {
      const end = Math.max(ans[last][1], interval[1])
      ans[last][1] = end
    }
  }
  return ans
}