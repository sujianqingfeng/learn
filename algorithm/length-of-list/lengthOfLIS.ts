export function lengthOfLIS(numList: number[]) {
  const result = new Array<number>(numList.length).fill(1)
  for (let i = 0; i < numList.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numList[j] < numList[i]) {
        result[i] = Math.max(result[i], result[j] + 1)
      }
    }
  }
  return Math.max(...result)
}
