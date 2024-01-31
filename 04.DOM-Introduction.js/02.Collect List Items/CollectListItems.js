function extractText() {
    const list = document.getElementById('items');
    const items = Array.from(list.children);
    const result = [];

    for(const item of items){
        result.push(item.textContent);

    }
    
    const textArea = document.getElementById('result');
    textArea.value = result.join('\n');
}