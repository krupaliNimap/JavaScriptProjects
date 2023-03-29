let a = 'my-name-is-krupali'
//First method
b = a.replaceAll("-"," ")
var c = []
for( let i = 0; i < a.length; i++){
    c.push(b[i])
}
var d = c[0].toUpperCase()
for(let i in c){
    if (i === '0'){
        continue
    }
    if(c[i-1] == " "){
        e = c[i].toUpperCase()
        d = d + e
    }
    else d = d + c[i]
}
console.log(d)

//second method using spread operator
let l = a.replaceAll('-', ' ');
let m = l.split(" ")
let o = []
function abc(r){
    let q = r.replace(r[0],r[0].toUpperCase())
    o.push(q)
}
let n = m.map(abc)
console.log(o.join(" "))
