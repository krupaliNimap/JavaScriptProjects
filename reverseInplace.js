let a = 'Krupali Pramod Atkari'
let x = a.split(" ")
//first method
console.log(a)
let y =[]
for (let i of x){
    let b = i.split("")
    let c = []
    for ( let i = b.length-1; i>=0;i--){
        c.push(b[i])
    }
    let d = c.join("")
    y.push(d)
}
console.log("First method : ",y.join(" "))

//second method
function abc(x){
    let l = x.split("")
    let n = ''
    for(let i = l.length-1; i>=0; i--){
        n = n + l[i]
    }
    return n
}
let m = x.map(abc)
console.log("Second Method : ",m.join(" "))