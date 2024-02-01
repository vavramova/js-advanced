function addItem() {
   const input = document.getElementById("newItemText");
   const listOfItems = document.getElementById("items");

   const text = input.value;

   const liElement = document.createElement("li");
   liElement.textContent = text;

   listOfItems.appendChild(liElement);
   input.value = "";

}