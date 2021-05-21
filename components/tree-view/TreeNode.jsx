import CaretIcon from './CaretIcon'
import { isActive } from '../../utils'
import styles from './tree.module.css'
import './tree.module.css'

import { useRef } from 'react'

const TreeNode = ({
  node,
  onSelect,
  onBlur,
  activeNode,
  onToggle,
  expandedNodes,
}) => {
  const nodeRef = useRef(null)
  const calculateClasses = (node) => {
    if (node.children.length > 0 && expandedNodes[node.id] === true) {
      return `${styles.expanded} ${styles.selected}`
    } else if (node.children.length > 0) {
      return `${styles.expanded}`
    }
  }
  const isActiveNode = (node) => {
    return activeNode && activeNode.id === node.id
  }

  const generateChildrenNodes = (children) => {
    return (
      <ul role="group">
        {children.map((child) => {
          return (
            <li
              key={child.id}
              aria-expanded={isActive(child, expandedNodes)}
              role="treeitem"
              className={calculateClasses(child)}
            >
              <TreeNode
                node={child}
                onBlur={onBlur}
                onSelect={onSelect}
                key={node.id}
                activeNode={activeNode}
                onToggle={onToggle}
                expandedNodes={expandedNodes}
              ></TreeNode>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <>
      <span
        role="button"
        ref={nodeRef}
        data-node-id={node.id}
        tabIndex="0"
        className={
          isActiveNode(node) ||
          (activeNode && activeNode.parent && activeNode.parent.id === node.id)
            ? styles.selected
            : ''
        }
        onClick={(e) => {
          e.preventDefault()
          // console.log(nodeRef, 'nodeRef')
          nodeRef.current && nodeRef.current.focus()
          onSelect(e, node)
          onToggle(node)
        }}
        onKeyDown={(e) => {
          const pressed = e.keyCode === 13 || e.keyCode === 32
          if (pressed) {
            nodeRef.current && nodeRef.current.focus()
            onSelect(e, node)
            onToggle(node)
            return
          }
        }}
        onBlur={(e) => {
          onBlur(e)
        }}
      >
        {node.name}
        <CaretIcon></CaretIcon>
      </span>

      {expandedNodes[node.id] === true &&
        node.children.length > 0 &&
        generateChildrenNodes(
          node.children,
          onSelect,
          activeNode,
          onToggle,
          expandedNodes
        )}
    </>
  )
}

export default TreeNode
