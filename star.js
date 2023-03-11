let n = 5;

function star(n){
    for (let i = 1; i <= n; i++){
        let str = ''
        for (let j = 1; j <= i; j++){
            str += '*'
        }
        console.log(str)
    }
}

star(n)