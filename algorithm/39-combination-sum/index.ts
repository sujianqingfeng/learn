// 39. Combination Sum
export function combinationSum(candidates:number[], target:number) {
  const ans:number[][] = []

  const dfs = (target:number, list:number[], index:number) => {
    if (index === candidates.length) {
      return
    }

    if (target === 0) {
      ans.push(list)
      return
    }

    dfs(target, list, index+1)
    const candidate = candidates[index]
    if (target-candidate>=0) {
      dfs(target-candidate, [...list, candidate], index)
    }
  }

  dfs(target, [], 0)
  return ans
}