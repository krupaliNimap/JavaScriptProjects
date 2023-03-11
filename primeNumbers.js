let num = 20;

function primenumber(num){
    
    for(i = 2; i < num; i++){
        let count = 0
        for(let j = 2; j < i; j++){
            if (i%j==0) count+=1 
        }
        if (count==0) console.log(i)
    }
}

primenumber(num)