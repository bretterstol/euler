function isPrime(number){
    var i = 2;
    while( i < number / 2){
        if(number % i === 0){
            return false
        }
        i++;
    }
    return true;
}

function highestPrime(num){
    var index = num;
    var i = 2;
    var result = [];
    while( i < index){
        if(num % i === 0){
            result.push(i);
            index = num / i;
        }
        i++;
    }
    return result.filter((value) => {
        return isPrime(value);
    });

}

console.log(highestPrime(600851475143));
