var string = 'yoy'
var string2 = string
var reverse = ''
function palindrome(){
    for (let i = string.length - 1; i>=0; i--){
        reverse = reverse + string[i]
    }
    if (reverse === string2) return "String is palindrome";
    else  return "String is not palindrome";
}
console.log(palindrome())