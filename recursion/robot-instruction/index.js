export default function robot_instruction(sequence){

    // base case
    if( !Boolean(sequence) )
        return "";

    const char = sequence[0];

    // Recursuve case 1
    if( char === "L" || char === "R" )
        return char + robot_instruction(sequence.substring(1))

    // Recursive case 2
    if( char === "2" )
        return robot_instruction(sequence.substring(1)) + robot_instruction(sequence.substring(2))

}