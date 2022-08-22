// Offer 16. 数值的整数次方
export function myPow(x:number, n:number) {
  if (x===0) { return 0 }
  if (n<0) {
    x = 1/x
    n = -n
  }

  let ans = 1

  while (n) {
    if ((n & 1)===1) {
      ans *= x
    }    
    x *= x
    n >>>= 1
  }

  return ans
}