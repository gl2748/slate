/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.move({ edge: 'end' })
}

export const input = (
  <value>
    <block>
      one <focus />two t<anchor />hree
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      one <focus />two th<anchor />ree
    </block>
  </value>
)
