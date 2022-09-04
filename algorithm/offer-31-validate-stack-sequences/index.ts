// 栈的压入、弹出序列
export function validateStackSequences(pushed:number[], popped:number[]) {
  const stack = []
  let i = 0
  for (const push of pushed) {
    stack.push(push)
    while (stack.length!==0 && popped[i] === stack[stack.length - 1]) {
      stack.pop()
      i++
    }
  }

  return stack.length === 0
}