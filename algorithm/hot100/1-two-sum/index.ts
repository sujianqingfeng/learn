export function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const n2 = nums[j];
      if (n + n2 === target) {
        return [i, j];
      }
    }
  }
}
