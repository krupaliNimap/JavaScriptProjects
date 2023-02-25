function Demerit(speed){
    const speedLimit = 70;
    const increase_points = 5
    if (speed < speedLimit) return "Ok";
    if (speed > speedLimit){
        speed = speed - speedLimit;
        const points = Math.floor(speed / increase_points);
        if ( points > 12 ){
            return "License Suspended";
        }
        return 'Points :' + points;
    }
}

console.log(Demerit(100));