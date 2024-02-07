function solve() {
    function getElement(selector) {
        return document.querySelector(selector);
    }
    
    const taskInput = getElement('#task');
    const descriptionInput = getElement('#description');
    const dateInput = getElement('#date');
    const addBtn = getElement('#add');
    
    
    let allSections = document.querySelectorAll('section');
    let openSection = allSections[1].querySelector('div:nth-child(2)');
    let progressSection = allSections[2].querySelector('div:nth-child(2)');
    let completeSection = allSections[3].querySelector('div:nth-child(2)');

    addBtn.addEventListener('click', function addTask(event) {
        event.preventDefault();
        const task = taskInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;

        if (!task || !description || !date) {
            return;
        }
   
    
    
    
    create("OpenTask", "green", "red", task, description,date)

    function create(type, btnClass1, btnClass2, task, description, date){


        let article = document.createElement("article");

        let header = document.createElement("h3");
        header.textContent = task;
        

        let paragraphDesc = document.createElement("p");
        paragraphDesc.textContent = `Description: ${description}`;

        let paragraphDate = document.createElement("p");
        paragraphDate.textContent = `Due Date: ${date}`;
        
        article.appendChild(paragraphDate);
        article.appendChild(paragraphDesc);
        article.appendChild(header);
        
        if(type == "OpenTask"){

        let div = document.createElement("div");
        div.className = "flex";
        
        let startButton = document.createElement("button");
        startButton.className = btnClass1;
        startButton.textContent = "Start";
        startButton.addEventListener("click", () => {
            deleteFunc(article)
            create("ProgressTask", "red", "orange",task,description,date);
        } )
        
        let deleteButton = document.createElement("button");
        deleteButton.className = btnClass2;
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteFunc(article)
        })
        
        div.appendChild(deleteButton);
        div.appendChild(startButton);
        article.appendChild(div);
        openSection.appendChild(article);

    } else if(type == "ProgressTask"){
        let div = document.createElement("div");
        div.className = "flex";

        let buttonDelete = document.createElement("button");
        buttonDelete.className = btnClass1;
        buttonDelete.addEventListener("click", () => {
            deleteFunc(article)
        })

        let finishButton = document.createElement("button");
        finishButton.className = btnClass2;
        finishButton.addEventListener("click", ()=>{
            deleteFunc(article)
            create("CompleteTask", null, null, task, description, date);
        });

        div.appendChild(buttonDelete);
        div.appendChild(finishButton);
        article.appendChild(div);
        progressSection.appendChild(article);

    } else if(type == "CompleteTask"){
        completeSection.appendChild(article);
    }
    
    function deleteFunc(article){
        article.remove();
    }
}
});
}