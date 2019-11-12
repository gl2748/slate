/** @jsx jsx */

import { jsx } from 'slate-hyperscript'

export const schema = [
  {
    for: 'node',
    match: { a: true },
    validate: {
      children: [{ min: 1, max: 1 }, { min: 1 }],
    },
  },
]

export const input = (
  <value>
    <element a>
      <element b>one</element>
    </element>
  </value>
)

export const output = <value />
