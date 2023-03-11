var num = 10;

function sumMultiples(num){
    var sum = 0;
    for  (let i = 0; i <= num; i++){
        if (i % 3 == 0) sum += i
        if (i % 5 == 0) sum += i
    }
    return sum;
}

console.log(sumMultiples(num));