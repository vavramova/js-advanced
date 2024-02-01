function subtract() {
   const num1ref = document.getElementById("firstNumber");
   const num2ref = document.getElementById("secondNumber");

   const num1 = Number(num1ref.value);
   const num2 = Number(num2ref.value);

   const sum = num1 - num2;

   const result = document.getElementById("result");
   result.textContent = sum;
}