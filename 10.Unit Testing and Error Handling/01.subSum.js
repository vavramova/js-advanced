function subSum(arr, start, end){
    if(!Array.isArray(arr)){
        return NaN;
    }

    let sum = 0;

    if(start < 0){
        start = 0;
    }

    if(end >= arr.length){
        end = arr.length - 1;
    }

    for(let i = start; i <= end; i++){
        sum += Number(arr[i]);
    }

   return sum;
}

subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)