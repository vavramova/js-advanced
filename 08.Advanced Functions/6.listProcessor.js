function solve(arr){
    let finalList = [];
    let commands ={
        add: (str) => finalList.push(str),
        remove: (str) =>    finalList =  finalList.filter((element) => element !== str),
        print: () => console.log(finalList.join(","))
    }

    arr.forEach(el => {
        let [command, str] = el.split(" ");
        commands[command](str);
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])