function search() {
   let list = document.querySelectorAll("li");
   let arrList = Array.from(list);

   let searchBar = document.getElementById("searchText");

   let result = document.getElementById("result");

   let matches = 0;

   for(let town of arrList){
      let townName = town.textContent;
      let match = searchBar.value
      if(townName.includes(match)){
         matches++;
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
      }
   }
   
   searchBar.value = "";
   result.textContent = matches + " matches found";
}
