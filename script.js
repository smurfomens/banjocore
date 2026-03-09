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
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const span = document.createElement("span");

    btn1.className = "btn btn-danger";
    btn1.textContent = "Apagar";

    btn2.className = "btn btn-success";
    btn2.textContent = "editar";
    
    li.className = "list-group-item"; 
    span.textContent = noteText;
    
    btn1.addEventListener("click", () => {
        list.removeChild(li)
    })

    btn2.addEventListener("click", () => {
        let editar = prompt();
        span.textContent = editar;
    })
    li.appendChild(span);
    li.appendChild(btn1);
    li.appendChild(btn2);

    list.appendChild(li); 
    
}