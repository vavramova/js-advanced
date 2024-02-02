function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const text = input.value;

    const rows = document.querySelectorAll('#customers tbody tr');
    let rowsArr = Array.from(rows);

    let success = false;

    for(let row of rowsArr){
        let rowContent = row.children[1].textContent;

        if(rowContent == text){
            row.remove();
            success = true;
        }
    }

    const output = document.getElementById("result");

    if(success){
        output.textContent = `Deleted.`
    }else{
        output.textContent = `Not found.`
    }

    input.value = "";
}