/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.deleteBackward()
}

export const input = (
  <value>
    <document>
      <paragraph>
        one<link>
          a<cursor />
        </link>two
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        one
        <cursor />
        <link />
        two
      </paragraph>
    </document>
  </value>
)
