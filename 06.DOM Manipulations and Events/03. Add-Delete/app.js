function addItem() {
    const input = document.getElementById("newItemText");

    if(input.value.length == 0){
        return;
    }
    
    const liElement = document.createElement("li");
    const text = input.value;
    liElement.textContent = text;

    const deleteButton = document.createElement("a");
    deleteButton.textContent = "[Delete]";
    deleteButton.href = "#";
    deleteButton.addEventListener("click", deleteFunc);
    liElement.appendChild(deleteButton);
    
    
    const listOfItems = document.getElementById("items");
 
    listOfItems.appendChild(liElement);
    input.value = "";
   
    function deleteFunc(event){
     const deleteBtn = event.target;
     const liElement = deleteBtn.parentElement;
     liElement.remove();
    
    }
}