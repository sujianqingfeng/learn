import { expect, describe, it } from 'vitest'
import { transformJsx } from '../jsx'

describe.only('swc', () => {
  it('jsx', async () => {
    const code = await  transformJsx('const a = <div class="b">test</div>')
    expect(code).toMatchInlineSnapshot(`
      "const a = h(\\"div\\", {
          \\"class\\": \\"b\\"
      }, [
          \\"test\\"
      ]);
      "
    `)
  })
})
