const btn = document.getElementById("btn");
const nota = document.getElementById("txt-inp");
const list = document.getElementById("notes");

btn.addEventListener("click", () => {
    const adnote = nota.value;
    
    if (adnote.trim() !== "") {
        adicionarnota(adnote);
        nota.value = "";
    }
});

function adicionarnota(noteText) {
    const li = document.createElement("li");
    
    li.className = "list-group-item"; 
    li.textContent = noteText;
    
    list.appendChild(li); 
}