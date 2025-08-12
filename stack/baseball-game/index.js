export default function base_ball_game(instructions){

    let stack = [];
    
    for( let instruction of instructions ){

        switch( instruction ){
            case "+": 
                stack.push(stack[stack.length - 1] + stack[stack.length - 2])
            continue

            case "D": 
                stack.push(stack[stack.length -1] * 2)
            continue

            case "C": 
                stack.pop();
            continue

            default:
                stack.push(parseInt(instruction));

        }

    }

    return stack.reduce((item, current_value)=> item + current_value, 0)

}