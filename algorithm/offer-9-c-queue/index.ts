// 剑指 Offer 09. 用两个栈实现队列
export class CQueue {
  in:number[] = []
  out:number[]= []

  appendTail(value:number) {
    this.in.push(value)
  }

  deleteHead() {
    if (this.out.length === 0) {
      if (this.in.length === 0) {
        return -1
      } else {
        while (this.in.length!==0) {
          this.out.push(this.in.pop()!)
        }
      }
    }
    return this.out.pop()
  }
}