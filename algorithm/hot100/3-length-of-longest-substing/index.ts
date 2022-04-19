

export function lengthOfLongestSubstring1(s:string){

  const length = s.length
  let num = 1

  for (let i = 0; i < length; i++) {
    const char = s[i]
    const set= new Set(char)

    for (let j = i; j < length; j++) {
      const char2 = s[j]
      // 这里可以判断两种情况
      //
      // 一是i处在后续出现的时候
      // 二是 如果后续的词出现了2次
      if(!set.has(char2)){
        num = Math.max(num,j-i+1)
      }
      set.add(char2)
      
    }
    
  }

  return num

}


export const lengthOfLongestSubstring = lengthOfLongestSubstring1
