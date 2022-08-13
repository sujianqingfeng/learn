// 412. Fizz Buzz
export function fizzBuzz(n: number) {
  const ans = []
  for (let i = 0; i < n; i++) {
    const t = i + 1

    if (t % 3 === 0 && t % 5 === 0) {
      ans.push('FizzBuzz')
    } else if (t % 3 === 0) {
      ans.push('Fizz')
    } else if (t % 5 === 0) {
      ans.push('Buzz')
    } else {
      ans.push(String(t))
    }
  }
  return ans
}
