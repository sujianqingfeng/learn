export type Room = {
  unit: number
  floor: number
  name: string
}

export const createToTreeContext = () => {
  const result = new Map()

  const toTree = (rooms: Room[]) => {
    rooms.forEach(room => {
      const { unit, floor } = room
      if (result.has(unit)) {
        const floorMap = result.get(unit)
        if (floorMap.has(floor)) {
          floorMap.get(floor).push(room)
        } else {
          floorMap.set(floor, [room])
        }
      } else {
        const floorMap = new Map()
        floorMap.set(floor, [room])
        result.set(unit, floorMap)
      }
    })
  }

  const getTree = () => {
    return result
  }

  return {
    toTree,
    getTree
  }
}

