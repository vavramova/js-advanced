function solution(num){
    return function(z){
        return num + z;
    }
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));