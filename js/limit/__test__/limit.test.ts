import { test } from "vitest"

import { createLimitAll } from "../index"

test("limit", () => {
  const { addTask } = createLimitAll(3)

  const createTask = (i: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i)
      }, 3000)
    })
  }

  for (let i = 0; i < 10; i++) {
    addTask(() => createTask(i))
  }
})
