import {test,expect} from 'vitest'

import { lengthOfLIS } from '../lengthOfLIS';

test('lengthOfLIS',()=>{
  const numList  = [10,9,2,5,3,7,101,18]

  const result = lengthOfLIS(numList)
  expect(result).toBe(4)
})