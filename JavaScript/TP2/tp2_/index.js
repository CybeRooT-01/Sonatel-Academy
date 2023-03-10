//créer un tableau avec des éléments.
const tableau = ["mon premier", "mon deuxieme", "mon troisieme", "mon quatrieme"];
const corps1 = document.querySelector(".corps1");

//
ajoutTableau(tableau, corps1);

const p = document.querySelectorAll('p');
p.forEach(element => {
    element.addEventListener("mouseenter", ()=>{
        element.classList.add("paragraphe_hover")
    })
});
p.forEach(element => {
    element.addEventListener("click", ()=>{
        element.classList.remove("paragraphe_hover")
    })
});

//fonction permettant de récupérer les données d'un tableau.
function ajoutTableau(tab, parent) {
    for(let i = 0; i< tab.length; i++) {
       let texte =tab[i]
       //création d'une balise paragraphe
       const paragraphe = document.createElement("p");
       
        //ajouter le texte dans le paragraphe
        paragraphe.innerHTML = texte;

        paragraphe.classList.add("paragraphe");

        //ajouter le paragraphe dans le div
        parent.appendChild(paragraphe);

    }
}
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const corps3 = document.querySelector(".corps3")

if(corps3.children.length==0)
    {
        button2.setAttribute("disabled","disabled")
    }
    if(corps1.children.length==0)
    {
        button1.setAttribute("disabled","disabled")
    }


    
/******moussa */
button1.addEventListener("click",()=>{
    p.forEach(element =>{
        if(element.classList.contains("paragraphe_hover")){
            element.classList.remove("paragraphe_hover")
            corps3.appendChild(element)
        }
    })
    if(corps1.children.length==0)
    {
        button1.setAttribute("disabled","disabled")
        
    }
    else{
        if(button1.disabled){
            button1.removeAttribute("disabled")
        }
        
    }

    if(corps3.children.length==0)
    {
        button2.setAttribute("disabled","disabled")
       
    }
    else{
        if(button2.hasAttribute("disabled")){
            button2.removeAttribute("disabled")
        }
        
    }

})



/********jean */

button2.addEventListener("click",()=>{
    p.forEach(element =>{
        if(element.classList.contains("paragraphe_hover")){
            element.classList.remove("paragraphe_hover")
            corps1.appendChild(element)
        }
    })
    if(corps3.children.length==0)
    {
        button2.setAttribute("disabled","disabled")
       
    }
    else{
        if(button2.hasAttribute("disabled")){
            button2.removeAttribute("disabled")
        }
        
    }

    if(corps1.children.length==0)
    {
        button1.setAttribute("disabled","disabled")
        
    }
    else{
        if(button1.disabled){
            button1.removeAttribute("disabled")
        }
        
    }
})