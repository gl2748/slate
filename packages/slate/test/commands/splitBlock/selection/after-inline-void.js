/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.splitBlock()
}

export const input = (
  <value>
    <block>
      one
      <inline void>
        <text />
      </inline>
      <cursor />two
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      one
      <inline void>
        <text />
      </inline>
      <text />
    </block>
    <block>
      <cursor />two
    </block>
  </value>
)
