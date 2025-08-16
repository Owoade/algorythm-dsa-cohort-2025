import { build_binary_search_tree } from "../builder.js";

function pre_order_traversal( root ){
    
    if( !root?.value )
        return

    console.log(root.value);
    pre_order_traversal(root.left);
    pre_order_traversal(root.right);
}

const root = build_binary_search_tree([8, 3, 10, 1, 6, 14, 4, 7, 13]);

/*
BST built from [8, 3, 10, 1, 6, 14, 4, 7, 13]:

        8
       / \
      3   10
     / \     \
    1   6     14
       / \    /
      4   7  13
*/

pre_order_traversal(root);