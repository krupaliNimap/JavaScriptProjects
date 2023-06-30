// console.log("Hello")
// let sto = setTimeout    (function(){
//     console.log('Krupali')
// }, 000);
// console.log("Bye")
// clearInterval(sto)
let sto , count = 0;
function startInterval(){
    sto = setInterval(function(){
        count += 1;
        console.log(count)
    }   , 1000);
} 
// function countInterval(){
//     count += 1;
//     console.log(count)
// }     
startInterval()