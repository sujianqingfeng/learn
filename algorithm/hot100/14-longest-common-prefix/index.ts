
// 编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
//  
//
// 示例 1：
//
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"


export function longestCommonPrefix(strs:string[]){
  const sl = strs.length 
  if(sl ===1) return strs[1]
  // 算出最短字符的长度
  const l =  strs.slice(1).reduce((p,s)=> Math.min(p,s.length),strs[0].length)
  let res = ''
  // 遍历字符
  for (let i = 0; i < l; i++) {
    const r = strs[0][i]
    // 遍历数组
    for (let j = 1; j < sl; j++) {
      // 遇到不一致就返回
      if(r!== strs[j][i]){
        return res
      }
    }
    // 存在公共字符 追加上去
    res+=r
  }
  return res
}
