export default function reverse_linked_list_concat(l){
    
    if( !Number.isInteger(l?.val) )
        return "";

    return reverse_linked_list_concat(l.next) + l.val.toString();

}