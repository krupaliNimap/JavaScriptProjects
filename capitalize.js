let a = 'my-name-is-krupali'
b = a.replaceAll("-"," ")
var c = []
for( let i = 0; i < a.length; i++){
    c.push(b[i])
}
var d = c[0].toUpperCase()
for(let i in c){
    console.log(c[i])
    if (c[i] == ' '){
        z = c[i+1].toUpperCase()
        d = d + ' ' + z
        console.log(9)
    }
    else d = d + c[i]
}
console.log(d)