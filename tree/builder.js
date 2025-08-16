// Node structure
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
// Insert into BST
function insert_node(root, value) {

    if (root === null) {
        return new TreeNode(value);
    }

    if (value < root.value) {
        root.left = insert_node(root.left, value);
    } else {
        root.right = insert_node(root.right, value);
    }

    return root;

}
  
  // Build BST from array
export function build_binary_search_tree(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  // Create root node
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  // Process level by level
  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift();

    // Add left child
    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    // Add right child
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}
  
  