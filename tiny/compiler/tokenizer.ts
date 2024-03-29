import { Token, TokenTypes } from './types'

const WHITESPACE = /\s/
const LETTERS = /[a-z]/i
const NUMBERS = /[0-9]/

export function tokenizer(code:string) {
  let current = 0
  const tokens:Token[] = [] 

  while (current  < code.length) {
    let char  = code[current]
   
    if (WHITESPACE.test(char)) {
      current++ 
      continue
    }

    if (char === '(') {
      tokens.push({
        type: TokenTypes.Paren,
        value: char
      })
      current++
      continue
    }

    if (char === ')') {
      tokens.push({
        type: TokenTypes.Paren,
        value: char
      })
      current++
      continue
    }

    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char) && current< code.length) {
        value+=char
        char = code[++current]
      }
      tokens.push({
        type: TokenTypes.Name,
        value
      })
    }

    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char) && current< code.length) {
        value+=char
        char = code[++current]
      }
      tokens.push({
        type: TokenTypes.Number,
        value
      })
    }
  }
  return tokens
}