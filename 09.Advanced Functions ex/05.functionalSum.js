function add(toAdd){
    sum = toAdd;

    function calculate(nextToAdd){
        sum += nextToAdd;
        return calculate;
    }

    calculate.toString = () => sum;
    return calculate;
}

console.log(add(1)(6)(-3).toString());