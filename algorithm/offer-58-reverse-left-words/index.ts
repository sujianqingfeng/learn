// 左旋转字符串
export function reverseLeftWords(s:string, n:number) {
  let ans = ''

  for (let i = n; i < s.length + n; i++) {
    ans+=s[i % s.length]
  }

  return ans
}