import ImmutableTypes from 'react-immutable-proptypes'
import React from 'react'
import SlateTypes from 'slate-prop-types'
import Types from 'prop-types'

import Leaf from './leaf'
import DATA_ATTRS from '../constants/data-attributes'

/**
 * Text node.
 *
 * @type {Component}
 */

const Text = React.forwardRef((props, ref) => {
  const { annotations, block, decorations, node, parent, editor, style } = props
  const { key } = node
  const leaves = node.getLeaves(annotations, decorations)
  let at = 0

  return (
    <span
      ref={ref}
      style={style}
      {...{
        [DATA_ATTRS.OBJECT]: node.object,
        [DATA_ATTRS.KEY]: key,
      }}
    >
      {leaves.map((leaf, index) => {
        const { text } = leaf
        const offset = at
        at += text.length

        return (
          <Leaf
            key={`${node.key}-${index}`}
            block={block}
            editor={editor}
            index={index}
            annotations={leaf.annotations}
            decorations={leaf.decorations}
            marks={leaf.marks}
            node={node}
            offset={offset}
            parent={parent}
            leaves={leaves}
            text={text}
          />
        )
      })}
    </span>
  )
})

/**
 * Prop types.
 *
 * @type {Object}
 */

Text.propTypes = {
  annotations: ImmutableTypes.map.isRequired,
  block: SlateTypes.block,
  decorations: ImmutableTypes.list.isRequired,
  editor: Types.object.isRequired,
  node: SlateTypes.node.isRequired,
  parent: SlateTypes.node.isRequired,
  style: Types.object,
}

/**
 * A memoized version of `Text` that updates less frequently.
 *
 * @type {Component}
 */

const MemoizedText = Text

/**
 * Export.
 *
 * @type {Component}
 */

export default MemoizedText
