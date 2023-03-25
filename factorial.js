var num = 5;
var fact = 1;
function factorial(){
    if (num === 0){
        console.log(1)
    }
    else {
        for (let i = 1 ; i <= num-1 ; i++){
            fact = fact * (i+1)  
        }
    }
    console.log(fact)
}
factorial()