const createDataTree = (arr = []) => {
  let memory = {},
    node,
    rootNodes = [],
    i

  //TODO: could we make it functional and not lose performance?
  for (i = 0; i < arr.length; i += 1) {
    memory[arr[i].id] = i // initialize the memory map
    arr[i].children = [] // initialize the children for each item
  }

  for (i = 0; i < arr.length; i += 1) {
    node = arr[i]
    if (node.parent) {
      //search memory map to find index to push to children
      arr[memory[node.parent.id]].children.push(node)
    } else {
      // add to rootNodes
      rootNodes.push(node)
    }
  }
  return rootNodes
}

export default createDataTree
