// 17. 电话号码的字母组合
export function  letterCombinations(digits:string) {

  const letterMap = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ]

  const ans:string[] = []
  if (digits.length === 0) { return ans }

  dfs(digits, 0, '')

  return ans

  function dfs(digits:string, index:number, cur:string) {
    if (index === digits.length) {
      ans.push(cur)
      return
    }

    const char = letterMap[+digits[index]]
    
    for (const c of char) {
      dfs(digits, index + 1, cur + c)
    }
  }
}