function isExpanded(node) {
  return node.children.length > 0 ? true : false
}
function isActive(node, expandedNodes) {
  return node.children.length > 0 && expandedNodes[node.id] === true
    ? true
    : false
}
export { isExpanded, isActive }
