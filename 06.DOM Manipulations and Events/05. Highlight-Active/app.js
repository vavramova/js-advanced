function focused() {
    const sections = document.querySelectorAll('input[type="text"]');

    let sectionsArr = Array.from(sections);

    for(let section of sectionsArr){
        section.addEventListener("focus", active);
        section.addEventListener("blur", notActive);
    }
       
    function active(movement){
        const divClick = movement.target;
        const parent = divClick.parentElement;
        parent.classList.add("focused");
        
    
    }
    
    function notActive(){
        const mainDiv = Array.from(document.querySelectorAll("div"));
        for(let div of mainDiv){
            div.classList.remove("focused");
        }
    }
}