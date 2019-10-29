/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.splitNodes()
}

export const input = (
  <value>
    <block>
      wo<anchor />rd
    </block>
    <block void>
      an<focus />other
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      wo<cursor />
    </block>
  </value>
)
