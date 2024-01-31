function calc() {
    const num1 = document.getElementById('num1')
    const sum1 = Number(num1.value);

    const num2 = document.getElementById('num2');
    const sum2 = Number(num2.value);

    const sum = sum1 + sum2;
    const text = document.getElementById('sum');
    text.value = sum;
    // TODO: sum = num1 + num2
}
