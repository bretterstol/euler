function isPaladrone(number){
    var string = String(number).split("");
    for (var i = 0; i <= (string.length -1) / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) return false;
    }
    return true;
}


function findHighest(){
    var pals = 0;
    for (var i = 999; i > 500; i--){
        for (var j = 999; j > 500; j--){
            var sum = j*i;
            if(isPaladrone(sum)){
                if(sum > pals) pals = sum;
            }
                
        }
    }
    return pals;
}

console.log(findHighest());
