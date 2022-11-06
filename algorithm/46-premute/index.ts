// 46.permutations
export function permute(nums:number[]) {
  const ans:number[][] = []
  const n = nums.length

  const backTrack = (first = 0) => {
    if (first === n) {
      ans.push([...nums])
    }
    // 从 first 只会交换没有用过的数  因为后面做了撤销
    for (let i = first; i < n; i++) {
      // 交换
      [nums[first], nums[i]]= [nums[i], nums[first]]
      backTrack(first + 1);
      // 撤销
      [nums[i], nums[first]]= [nums[first], nums[i]]
    }
  }

  backTrack()
  return ans
}