//selections
const container = document.querySelector(".container");
const add_btn = document.querySelector(".add");
//================fonctions================
function add_content(){
    
const parent = document.createElement("div")
parent.classList.add("box")

const header = document.createElement("div")
const note = document.createElement("div")
note.classList.add("note")

header.classList.add("box_header")

const edit = document.createElement("div")
edit.classList.add("edit")

const trash = document.createElement("div")
trash.classList.add("trash")

const box_container = document.createElement("div")
box_container.classList.add("box_container")

const textarea = document.createElement("textarea")
textarea.setAttribute("cols", "63")
textarea.setAttribute("rows", "25")
textarea.classList.add("textarea")

const ico_trash = document.createElement("i")
ico_trash.classList.add("fa-solid")
ico_trash.classList.add("fa-trash")

const ico_edit = document.createElement("i")
ico_edit.classList.add("fa-regular")
ico_edit.classList.add("fa-pen-to-square")

edit.appendChild(ico_edit)
trash.appendChild(ico_trash)
header.appendChild(note)
header.appendChild(edit)
header.appendChild(trash)
box_container.appendChild(textarea)
parent.appendChild(header)
parent.appendChild(box_container)
container.appendChild(parent)
//event
    ico_trash.addEventListener("click", ()=>{
                parent.remove();
    })

    ico_edit.addEventListener("click", ()=>{
        if (textarea.readOnly) {
            textarea.removeAttribute("readonly");
            note.innerHTML = "Lecture Ecriture"
        } else {
            textarea.setAttribute("readonly", "readonly");
            note.innerHTML = "Lecture unique"
        }
    })
}
//================evenements================
add_btn.addEventListener("click", ()=>{
    add_content()
})