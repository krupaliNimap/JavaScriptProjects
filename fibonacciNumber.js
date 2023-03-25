var num = 10;
var num1 = 0;
var num2 = 1;
var list = [0, 1]
function fibonacci(){
    let i = 0;
    while (i<(num-2)){
        var sum = num1 + num2;
        list.push(sum);
        num1 = num2 ;
        num2 = sum;
        i++;
    }
    return(list)
}
console.log(fibonacci())