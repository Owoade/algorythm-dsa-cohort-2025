export default function nested_array_sum( arr ){

    // Base case 
    if( arr.length === 0 )
        return 0;
    
    const val = arr[0];

        // Recursive case 2
    if( typeof val !== "number" )
        return nested_array_sum(val) + nested_array_sum(arr.slice(1));

    // Recursive case 2
    return val + nested_array_sum(arr.slice(1));

}