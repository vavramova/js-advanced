function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = [...document.querySelectorAll("#main button")];
    const textContainers = [...document.querySelectorAll("#main textarea")];

    encodeBtn.addEventListener("click", encodeAndSend);
    decodeBtn.addEventListener("click", decodeAndRead);

    function transformText(text, callBackF){
        return text.split("").map(callBackF).join("");
    }

    function previous(c){
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    function next(c){
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function encodeAndSend(event){
        textContainers[1].value = transformText(textContainers[0].value, next);
        textContainers[0].value = "";
    }

    function decodeAndRead(event){
        textContainers[1].value = transformText(textContainers[1].value, previous);
    }
}