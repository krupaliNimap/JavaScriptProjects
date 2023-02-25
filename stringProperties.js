const string1 = {
    name : 'Krupali',
    age : 21,
    college : 'Ltcoe'
}

function stringProperties(string1){
    for ( let i of Object.keys(string1)){
        if (typeof string1[i] === 'string') {
            console.log(i, string1[i])
        }
    }
}

stringProperties(string1)