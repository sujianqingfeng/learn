import { transform } from '@swc/core'
import { Program } from '@swc/core'

const transformVueJsx = (module: Program) => {
  console.log('module', module)

  return module
}

export const transformJsx = async (code:string) => {
  
  const result =  await transform(code, {
    jsc: {
      target: 'es2022',
      parser: {
        syntax: 'ecmascript',
        jsx: true
      }
    },
    plugin: (m) => transformVueJsx(m)
  })
  return result.code
}