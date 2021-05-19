import TreeNode from './TreeNode'
const Tree = ({ rootNodes, className, onSelect }) => {
  return (
    <div className={className}>
      <ul role="tree">
        {rootNodes.map((node, idx) => (
          <li key={node.id} role="treeitem">
            <TreeNode
              node={node}
              key={`${node.id}${idx}`}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tree
