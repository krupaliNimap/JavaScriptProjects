let arr = [
    {name : "Krupali", age : 21},
    {name : "John", age : 20},
    {name : "Jay", age : 18},
    {name : "Riya", age : 19}
];

function age2(x){
    if (x.age<20){
    return x.name;
    }
}

const output = arr.filter(age2).map((x)=>x.name);

console.log(output)
