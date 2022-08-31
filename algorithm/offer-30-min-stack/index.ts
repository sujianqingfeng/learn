// 包含min函数的栈
export class MinStack {
  a:number[] = []
  b:number[] = []

  private getBLen() {
    return this.b.length
  }

  push(x:number) {
    this.a.push(x)
    const bLen = this.getBLen()
    if (bLen === 0 || this.b[bLen-1]>=x) {
      this.b.push(x)
    }
  }

  pop() {
    const temp = this.a.pop()
    if (temp === this.b[this.getBLen()-1]) {
      this.b.pop()
    }
  }

  top() {
    return this.a[this.a.length-1]
  }

  min() {
    return this.b[this.getBLen()-1]
  }
}