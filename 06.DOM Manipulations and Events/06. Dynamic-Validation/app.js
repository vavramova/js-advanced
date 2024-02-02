function validate() {
    const input = document.getElementById("email");
    
    
    input.addEventListener("change", fullMail);
    
    function fullMail(email){
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;
        if(pattern.test(email.target.value)){
            email.target.classList.remove("error");
        }else{
            email.target.classList.add("error");
        }
    }

    }
