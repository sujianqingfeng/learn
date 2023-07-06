import type { Room } from '../index'
import { createToTreeContext } from '../index'

import { describe, it, expect } from 'vitest'

const createRooms = (unitBase:number, unitSize: number, floorBase:number, floorSize: number, name: string) => {
  const rooms:Room[] = []
  Array.from({ length: unitSize }, (_, unit) => {
    Array.from({ length: floorSize }, (_, floor) => {
      rooms.push({
        unit: unit + unitBase,
        floor: floor + floorBase,
        name: `${unit + unitBase}-${floor + floorBase}-${name}`
      })
    })
  })

  return rooms
}

describe('to-tree', () => {
  it('1', () => {
    const context =  createToTreeContext()
    let rooms = createRooms(1, 3, 1, 3, '第一次')
    context.toTree(rooms)
    expect(context.getTree()).toMatchInlineSnapshot(`
      Map {
        1 => Map {
          1 => [
            {
              "floor": 1,
              "name": "1-1-第一次",
              "unit": 1,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "1-2-第一次",
              "unit": 1,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "1-3-第一次",
              "unit": 1,
            },
          ],
        },
        2 => Map {
          1 => [
            {
              "floor": 1,
              "name": "2-1-第一次",
              "unit": 2,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "2-2-第一次",
              "unit": 2,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "2-3-第一次",
              "unit": 2,
            },
          ],
        },
        3 => Map {
          1 => [
            {
              "floor": 1,
              "name": "3-1-第一次",
              "unit": 3,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "3-2-第一次",
              "unit": 3,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "3-3-第一次",
              "unit": 3,
            },
          ],
        },
      }
    `)

    rooms = createRooms(1, 3, 4, 3, '第二次')
    context.toTree(rooms)

    expect(context.getTree()).toMatchInlineSnapshot(`
      Map {
        1 => Map {
          1 => [
            {
              "floor": 1,
              "name": "1-1-第一次",
              "unit": 1,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "1-2-第一次",
              "unit": 1,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "1-3-第一次",
              "unit": 1,
            },
          ],
          4 => [
            {
              "floor": 4,
              "name": "1-4-第二次",
              "unit": 1,
            },
          ],
          5 => [
            {
              "floor": 5,
              "name": "1-5-第二次",
              "unit": 1,
            },
          ],
          6 => [
            {
              "floor": 6,
              "name": "1-6-第二次",
              "unit": 1,
            },
          ],
        },
        2 => Map {
          1 => [
            {
              "floor": 1,
              "name": "2-1-第一次",
              "unit": 2,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "2-2-第一次",
              "unit": 2,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "2-3-第一次",
              "unit": 2,
            },
          ],
          4 => [
            {
              "floor": 4,
              "name": "2-4-第二次",
              "unit": 2,
            },
          ],
          5 => [
            {
              "floor": 5,
              "name": "2-5-第二次",
              "unit": 2,
            },
          ],
          6 => [
            {
              "floor": 6,
              "name": "2-6-第二次",
              "unit": 2,
            },
          ],
        },
        3 => Map {
          1 => [
            {
              "floor": 1,
              "name": "3-1-第一次",
              "unit": 3,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "3-2-第一次",
              "unit": 3,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "3-3-第一次",
              "unit": 3,
            },
          ],
          4 => [
            {
              "floor": 4,
              "name": "3-4-第二次",
              "unit": 3,
            },
          ],
          5 => [
            {
              "floor": 5,
              "name": "3-5-第二次",
              "unit": 3,
            },
          ],
          6 => [
            {
              "floor": 6,
              "name": "3-6-第二次",
              "unit": 3,
            },
          ],
        },
      }
    `)

    rooms = createRooms(1, 3, 1, 3, '第三次')
    context.toTree(rooms)
    expect(context.getTree()).toMatchInlineSnapshot(`
      Map {
        1 => Map {
          1 => [
            {
              "floor": 1,
              "name": "1-1-第一次",
              "unit": 1,
            },
            {
              "floor": 1,
              "name": "1-1-第三次",
              "unit": 1,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "1-2-第一次",
              "unit": 1,
            },
            {
              "floor": 2,
              "name": "1-2-第三次",
              "unit": 1,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "1-3-第一次",
              "unit": 1,
            },
            {
              "floor": 3,
              "name": "1-3-第三次",
              "unit": 1,
            },
          ],
          4 => [
            {
              "floor": 4,
              "name": "1-4-第二次",
              "unit": 1,
            },
          ],
          5 => [
            {
              "floor": 5,
              "name": "1-5-第二次",
              "unit": 1,
            },
          ],
          6 => [
            {
              "floor": 6,
              "name": "1-6-第二次",
              "unit": 1,
            },
          ],
        },
        2 => Map {
          1 => [
            {
              "floor": 1,
              "name": "2-1-第一次",
              "unit": 2,
            },
            {
              "floor": 1,
              "name": "2-1-第三次",
              "unit": 2,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "2-2-第一次",
              "unit": 2,
            },
            {
              "floor": 2,
              "name": "2-2-第三次",
              "unit": 2,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "2-3-第一次",
              "unit": 2,
            },
            {
              "floor": 3,
              "name": "2-3-第三次",
              "unit": 2,
            },
          ],
          4 => [
            {
              "floor": 4,
              "name": "2-4-第二次",
              "unit": 2,
            },
          ],
          5 => [
            {
              "floor": 5,
              "name": "2-5-第二次",
              "unit": 2,
            },
          ],
          6 => [
            {
              "floor": 6,
              "name": "2-6-第二次",
              "unit": 2,
            },
          ],
        },
        3 => Map {
          1 => [
            {
              "floor": 1,
              "name": "3-1-第一次",
              "unit": 3,
            },
            {
              "floor": 1,
              "name": "3-1-第三次",
              "unit": 3,
            },
          ],
          2 => [
            {
              "floor": 2,
              "name": "3-2-第一次",
              "unit": 3,
            },
            {
              "floor": 2,
              "name": "3-2-第三次",
              "unit": 3,
            },
          ],
          3 => [
            {
              "floor": 3,
              "name": "3-3-第一次",
              "unit": 3,
            },
            {
              "floor": 3,
              "name": "3-3-第三次",
              "unit": 3,
            },
          ],
          4 => [
            {
              "floor": 4,
              "name": "3-4-第二次",
              "unit": 3,
            },
          ],
          5 => [
            {
              "floor": 5,
              "name": "3-5-第二次",
              "unit": 3,
            },
          ],
          6 => [
            {
              "floor": 6,
              "name": "3-6-第二次",
              "unit": 3,
            },
          ],
        },
      }
    `)
  })
})

