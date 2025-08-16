import { build_binary_search_tree } from "../builder.js";

function post_order_traversal( root ){
    
    if( !root?.value )
        return

    post_order_traversal(root.left);
    post_order_traversal(root.right);
    console.log(root.value);

}

const root = build_binary_search_tree([15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9]);

/*
BST built from [15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9]:

         15
        /  \
       6    18
      / \   / \
     3   7 17  20
    / \   \ 
   2   4   13
          /
         9
*/

post_order_traversal(root);