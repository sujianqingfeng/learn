export const createLimitAll = (limit: number) => {
  const tasks: any[] = []
  const running: Promise<any>[] = []
  const result: any = []

  const addTask = (fn: () => Promise<unknown>) => {
    const n = tasks.length
    tasks.push([fn, n])
  }

  const run = () => {
    const innerRun = (
      resolve: (r: any[]) => void,
      reject: (reason: any) => any
    ) => {
      while (tasks.length && running.length < limit) {
        const p = new Promise((resolve, reject) => {
          const [fn, i] = tasks.shift()
          fn()
            .then((res: any) => {
              result[i] = res
              resolve(res)
            })
            .catch((e: Error) => {
              reject(e)
            })
            .finally(() => {
              const index = running.indexOf(p)
              running.splice(index, 1)
            })
        })
        running.push(p)
      }

      Promise.race(running)
        .then(() => {
          if (tasks.length === 0 && running.length === 0) {
            resolve(result)
          } else {
            innerRun(resolve, reject)
          }
        })
        .catch((error) => {
          reject(error)
        })
    }

    return new Promise((resolve, reject) => {
      innerRun(resolve, reject)
    })
  }

  return {
    addTask,
    run,
  }
}
