import { describe, it, expect } from 'vitest'
import { filterTree, } from '../index'
import type { BadgeTree } from '../index'

describe('filter-tree', () => {
  it('1', () => {

    const original:BadgeTree = {
      'num': 1,
      'link': '',
      'children': [
        {
          'num': 1,
          'link': '/home',
          'children': [
            {
              'num': 1,
              'link': '/home/transcribe',
              'children': [
                {
                  'num': 1,
                  'link': '/home/transcribe/cus-list',
                  'children': [
                    {
                      'num': 1,
                      'link': '/home/transcribe/cus-list/111122222',
                      'children': []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

    const whiteRegList = ['', '/home', '/home/transcribe', '/home/transcribe/cus-list', '/home/transcribe/cus-list/.+']

    const result = filterTree(original, whiteRegList)
    expect(result).toMatchSnapshot()
  })

  it('2', () => {
    const original:BadgeTree = {
      'num': 3,
      'link': '',
      'children': [
        {
          'num': 3,
          'link': '/home',
          'children': [
            {
              'num': 3,
              'link': '/home/transcribe',
              'children': [
                {
                  'num': 3,
                  'link': '/home/transcribe/cus-list',
                  'children': [
                    {
                      'num': 1,
                      'link': '/home/transcribe/cus-list/111122222',
                      'children': []
                    },
                    {
                      'num': 1,
                      'link': '/home/transcribe/cus-xxx/111122222',
                      'children': []
                    },
                    {
                      'num': 1,
                      'link': '/home/transcribe/cus-yyy/111122222',
                      'children': []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

    const whiteRegList = ['', '/home', '/home/transcribe', '/home/transcribe/cus-list', ['/home/transcribe/cus-xxx/.+', '/home/transcribe/cus-yyy/.+']]

    const result = filterTree(original, whiteRegList)
    expect(result).toMatchSnapshot()
  })
})