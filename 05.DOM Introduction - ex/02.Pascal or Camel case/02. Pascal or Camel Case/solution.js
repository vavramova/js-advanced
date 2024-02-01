function solve() {
    let input = document.getElementById("text").value;
    let currentCase = document.getElementById("naming-convention").value;
    let resultRef = document.getElementById("result");
    input = input.toLowerCase();
    let result = "";
    let arr = input.split(" ");

    if(currentCase == "Camel Case"){
      result = arr.shift();

      arr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
    } else if(currentCase == "Pascal Case"){
      
      arr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1)
      })
    }else{
      result = "Error!"
    }

    resultRef.textContent = result;
}