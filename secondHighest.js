var a = [2,4,4,5,5,1,3]
var highest = 0;
var secondHighest = 0
for (let i = 0; i<a.length; i++){
    if (a[i] > highest){
        secondHighest = highest
        highest = a[i]
    }
    if ((a[i]!=highest) && (a[i]>secondHighest)){
        secondHighest = a[i]
    }
}


console.log(secondHighest)

