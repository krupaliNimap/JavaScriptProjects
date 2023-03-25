let arr = [
    {name : "Krupali", age : 21},
    {name : "John", age : 20},
    {name : "Jay", age : 20},
    {name : "Riya", age : 19}
];

const output = arr.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(output);