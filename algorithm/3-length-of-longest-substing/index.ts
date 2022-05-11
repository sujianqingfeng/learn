

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



function lengthOfLongestSubstring2(s:string){

  const n = s.length
  let max = 0, left = 0, right = 0
  const map = new Map()

  while (right < n) {
    const char = s[right]

    // 如果存在重复就向左移动一位 通过之前存储的位置来获取索引
    if(map.has(char)){
      left = Math.max(left,map.get(char) + 1)
    }

    // 存下值和索引
    map.set(char,right)
    max = Math.max(max, right - left + 1)
    right ++
  }
  
  return max
}


export const lengthOfLongestSubstring = lengthOfLongestSubstring2
