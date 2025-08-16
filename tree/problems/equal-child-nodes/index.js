export default function find_equal_parents(root, parent_nodes){

    if( !root )
        return undefined;

    if( root?.right && root?.left && root?.left?.value === root?.right?.value )
        parent_nodes.push(root.value)

    const left_value = find_equal_parents(root.left, parent_nodes);

    const right_value = find_equal_parents(root.right, parent_nodes);

    if( left_value === right_value ){
        if( ![left_value, right_value].includes(undefined) && !parent_nodes.includes(root.value) ){
            parent_nodes.push(root.value)
        }
    }

    return root.value + (left_value ?? 0) + (right_value ?? 0);

}