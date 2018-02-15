function smallestDivedebleNumber(){
    var number = 2 * 19;
    while(!check(number)){
        number++;
    }
    return number;
}

function check(num){
    for (var i = 2; i < 21; i ++){
        if(num % i !== 0) return false;
    }
    return true;
}

console.log(smallestDivedebleNumber());
