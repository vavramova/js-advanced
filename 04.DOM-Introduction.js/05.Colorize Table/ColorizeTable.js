function colorize() {
   const rows = document.querySelectorAll("table tr");
    let idx = 0;

    for(const row of rows){
        idx++;
        if(idx % 2 == 0){
            row.style.background ='teal';
        }
    }
}