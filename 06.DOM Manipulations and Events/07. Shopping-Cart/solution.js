function solve() {
   let products = [];
   let addBtns = document.querySelectorAll('.add-product');
   let checkOutBtn = document.querySelector('.checkout');
   let total = 0;
   
   let textArea = document.querySelector('textarea');

   let addBtnsArray = Array.from(addBtns);
   addBtnsArray.forEach(btn => btn.addEventListener("click", AddToCart));

   checkOutBtn.addEventListener("click", checkOut);

   function checkOut(){
      let bougthProducts = new Set(products);
      textArea.value += `You bought ${[...bougthProducts].join(", ")} for ${total.toFixed(2)}.`;
      addBtnsArray.forEach(btn => btn.removeEventListener("click", AddToCart));
      checkOutBtn.removeEventListener("click", checkOut);
   }

   function AddToCart(event){
      let product = event.target.parentElement.parentElement;
      let name = product.querySelector('.product-title').textContent;
      let singlePrice = Number(product.querySelector('.product-line-price').textContent);
      products.push(name);
      total += singlePrice;
      textArea.value += `Added ${name} for ${singlePrice.toFixed(2)} to the cart.\n`;
   }
}

