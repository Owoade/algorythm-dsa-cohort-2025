export default function valid_parenthesis( str ){

    let stack = [];

    let hash_map = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    }

    const opening_brackets = ["[","(","{"]

    for( let char of str.split("") ){

        if( opening_brackets.includes(char) ){
            stack.push(char)
        }

        else {

            const last_item_in_stack = stack.pop();

            const corresponding_opening_bracket = hash_map[char];
            
            if( corresponding_opening_bracket !== last_item_in_stack )
                return false;

        }

    }

    return stack.length === 0;

}