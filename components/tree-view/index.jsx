import TreeNode from './TreeNode'
import styles from './tree.module.css'
import './tree.module.css'
import { isActive } from '../../utils'

const Tree = ({
  rootNodes,
  onSelect,
  activeNode,
  onToggle,
  onBlur,
  expandedNodes,
}) => {
  const calculateClasses = (node) => {
    if (node.children.length > 0 && expandedNodes[node.id] === true) {
      return `${styles.expanded} ${styles.selected}`
    } else if (node.children.length > 0) {
      return `${styles.expanded}`
    }
  }
  return (
    <div className={styles.treeView}>
      <ul role="tree">
        {rootNodes.map((node) => (
          <li
            key={node.id}
            aria-expanded={isActive(node, expandedNodes)}
            role="treeitem"
            className={calculateClasses(node, expandedNodes)}
          >
            <TreeNode
              node={node}
              key={`${node.id}`}
              onSelect={onSelect}
              onBlur={onBlur}
              activeNode={activeNode}
              onToggle={onToggle}
              expandedNodes={expandedNodes}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tree
