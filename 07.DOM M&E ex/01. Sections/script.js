function create(words) {
   const contentDiv = document.getElementById("content");

   words.forEach((word) => {
      const div = document.createElement("div");
      const paragraph = document.createElement("p");

      paragraph.textContent = word;
      paragraph.style.display = "none";

      div.appendChild(paragraph);
      div.addEventListener("click", reveal);

      contentDiv.appendChild(div);
   })

   function reveal(event){
      event.currentTarget.children[0].style.display = "block";
   }
}