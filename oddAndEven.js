let limit = 10;
function evenOdd(limit){
    for (let i = 0; i<=limit; i++){
        if(i%2==0) console.log(i, 'Even')
        if(i%2!=0) console.log(i, 'Odd')
    }
}

evenOdd(limit);