import { build_binary_search_tree } from "../../builder.js";

export default function breadth_first_search_traversal(root){
    
    const queue = [root];

    while ( queue.length > 0 ){

        const node = queue.shift();

        if( !node )
            continue

        console.log(node.value);
        queue.push(node.left);
        queue.push(node.right);

    }

}

const root = build_binary_search_tree([5, 2, 12, 1, 3, 9, 21, 19, 25]);

breadth_first_search_traversal(root);