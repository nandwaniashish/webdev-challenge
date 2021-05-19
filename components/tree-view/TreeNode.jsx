import CaretIcon from './CaretIcon'
const TreeNode = ({ node, onSelect }) => {
  const generateChildrenNodes = (children) => {
    return (
      <ul role="group">
        {children.map((child) => {
          return (
            <li key={child.id} role="treeitem">
              <TreeNode node={child} onSelect={onSelect}></TreeNode>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <>
      <span role="button" onClick={onSelect}>
        {node.name}
        <CaretIcon></CaretIcon>
      </span>
      {node.children.length > 0 && generateChildrenNodes(node.children)}
    </>
  )
}

export default TreeNode
