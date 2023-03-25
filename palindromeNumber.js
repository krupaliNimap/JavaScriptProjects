var num = 123216;
var num2 = num;
function palindrome(){
    var sum = 0;
    while(num2 != 0){
        var res = num2 % 10
        sum = 10 * sum + res
        num2 = Math.floor(num2 / 10)
    }
    console.log(sum)


}
palindrome()



