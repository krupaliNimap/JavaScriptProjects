let a = [80, 90, 90, 100];

function grade(a){
    let marks = 0;
    for (let i of a){
        marks += i
        avg = Math.round(marks/a.length)
    }
    console.log(avg, marks)
    if (avg < 60) return("F");
    if (avg < 70) return("D");
    if (avg < 80) return("C");
    if (avg < 90) return("B");
    if (avg < 100) return("A");
}

console.log(grade(a))