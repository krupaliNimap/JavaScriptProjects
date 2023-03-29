var data=[0,false,1,'false',null,true,'abcd']
let firstOutput = []
for(let i = 0; i<=data.length; i++){
    if (data[i]){
        firstOutput.push(data[i])
    }
}
console.log('First Method : ',firstOutput)

//Second Method
const secondOutput = data.filter(Boolean)
console.log("Second Method : ",secondOutput)