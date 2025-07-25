function print_from_1_to_n(n){
    
    if( n < 1 )
        return 

    print_from_1_to_n(n-1);

    console.log(n)

}

print_from_1_to_n(10)