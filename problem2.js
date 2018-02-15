function evenFibernacci(){
    var number = getFibernacci(4000000);

    return number.reduce((sum, numb) => {
        if(numb % 2 === 0){
            return sum += numb;
        }else{
            return sum;
        }
    }, 0);
}

function getFibernacci(end){
    var twoBehind = 1;
    console.log(end);
    var onebehind = 2;
    var sum = [twoBehind, onebehind];

    do{
        var next = twoBehind + onebehind;
        if(next >= end) break;
        sum.push(next);
        twoBehind = onebehind;
        onebehind = next;
    }while(next < end)

    console.log(sum);

    return sum;
}


console.log(evenFibernacci());
