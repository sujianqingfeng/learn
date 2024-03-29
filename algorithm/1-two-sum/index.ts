export function twoSum1(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const n2 = nums[j]
      if (n + n2 === target) {
        return [i, j]
      }
    }
  }
}

export function twoSum2(nums:number[], target: number) {

  const indexMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const v = target - n
    if (indexMap.has(v)) {
      return [indexMap.get(v), i]
    }
    indexMap.set(n, i)
  }
   
}

export const twoSum = twoSum2
