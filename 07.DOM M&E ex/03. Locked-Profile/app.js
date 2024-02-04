function lockedProfile() {
    const SHOW_MORE = "Show more";
    const HIDE_IT = "Hide it";

    const btnElements = Array.from(document.querySelectorAll("div button"));

    for(const btn of btnElements){
        btn.addEventListener("click", showMore);
    }

    function showMore(event){
        const divChildren = Array.from(event.target.parentElement.children);
        const isLocked = divChildren[2].checked;

        if(isLocked){
            return;
        }

        const hiddenEl = event.target.previousElementSibling;

        if(event.target.textContent === SHOW_MORE){
            hiddenEl.style.display = "inline";
            event.target.textContent = HIDE_IT;
            return;
        }

        hiddenEl.style.display = "none";
        event.target.textContent = SHOW_MORE;
    }
}