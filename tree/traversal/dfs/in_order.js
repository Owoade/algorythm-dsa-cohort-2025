import { build_binary_search_tree } from "../../builder.js";

function in_order_traversal( root ){

    if( !root?.value )
        return

    in_order_traversal(root.left);
    console.log(root.value);
    in_order_traversal(root.right);
}

const root = build_binary_search_tree([5, 2, 12, 1, 3, 9, 21, 19, 25]);

/*
BST built from [5, 2, 12, 1, 3, 9, 21, 19, 25]:

        5
       / \
      2   12
     / \   / \
    1   3 9  21
              / \
             19  25
*/

in_order_traversal(root)