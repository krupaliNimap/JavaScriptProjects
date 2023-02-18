function fizzBuzz(num){
    if (num%5===0 && num%3===0){
        return ("FizzBuzz");
    }
    if (num%5 === 0){
        return ("Buzz");
    }
    if (num%3===0){
        return ("fizzBuzz");
    }   
    if ( num !== "Not a number" ) {
        return ("Not a number.")
    }
    if ( num % 5 !== 0 && num % 3 !== 0 ) {
        return ( num )
    }
    
}

console.log(fizzBuzz("klj"))