// const createLimit = (limit:number) => {
//   return (fn: () => Promise<unknown>)=>{
//   }
// }

export const createLimitAll = (limit: number) => {
  const tasks: any[] = []
  const running: Promise<any>[] = []
  const result = []

  const addTask = (fn: () => Promise<unknown>) => {
    const n = tasks.length
    tasks.push([fn, n])
  }

  const run = () => {
    while (tasks.length && running.length < limit) {
      const p = new Promise(async (resolve, reject) => {
        const [fn, i] = tasks.shift()
        const r = await fn()
        result[i] = r
      })
      running.push(p)
    }

    Promise.race(running).then(() => {
      if (tasks.length === 0 && running.length === 0) {
        console.log("end")
      }
    })
  }

  return {
    addTask,
    run,
  }
}
