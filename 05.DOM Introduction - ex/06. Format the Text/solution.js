function solve() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const text = input.value;
  const sentences = text.split(".").filter(sentence => sentence.trim().length > 0);
  const paragraphs = [];
  let count = 0;
  let paragraph = document.createElement("p");

  sentences.forEach((sentence, idx) => {
    paragraph.textContent += sentence.trim() + ".";
    count++;

    if(count === 3 || idx === sentences.length - 1){
      paragraphs.push(paragraph);
      paragraph = document.createElement("p");
      count = 0;
    }
  });

  paragraphs.forEach(p => output.appendChild(p));
}