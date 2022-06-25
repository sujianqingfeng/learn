export function reverseWords(s:string){

  const list = [...s] 

  let l = 0 ,r = 1

  while(l<list.length){

    // 找到第一个单词
    while(list[r] && list[r]!==' '){
      r++
    }

    // 反转
    for (let i = l,j=r-1; i < j; i++,j--) {
      [list[i],list[j]] = [list[j],list[i]]
    }

    l = r + 1
    r = l
  }
  
  return list.join('')
}
