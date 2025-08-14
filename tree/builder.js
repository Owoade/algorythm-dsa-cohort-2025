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
    let root = null;
    for (let value of arr) {
      root = insert_node(root, value);
    }
    return root;
}
  
  