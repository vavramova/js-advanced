function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInput = document.getElementById("searchField");
   const tableRows = Array.from(document.querySelectorAll("table tr"));

   function onClick() {
      let searchText = searchInput.value;
      for(let tableRow of tableRows){
         let tableData = Array.from(tableRow.querySelectorAll("td"));
         for(let data of tableData){
            if(data.textContent.includes(searchText)){
               tableRow.classList.add("select");
               break;
            }else{
               tableRow.classList.remove("select");
            }
         }
      }
      searchInput.value = "";
   }
}