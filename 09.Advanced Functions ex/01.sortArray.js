function solve(arr, def){
    if(def == "asc"){
        return arr.sort((a,b) => a - b);
    }else{
        return arr.sort((a,b) => b - a);
    }
}

solve([14, 7, 17, 6, 8], 'desc')