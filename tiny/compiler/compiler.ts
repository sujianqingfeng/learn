import { codegen } from './codegen'
import { parser } from './parser'
import { tokenizer } from './tokenizer'
import { transformer } from './transformer'

export function compiler(code:string) {
  const tokens = tokenizer(code)
  const ast = parser(tokens)
  const transformedAst = transformer(ast)
  return codegen(transformedAst)
}