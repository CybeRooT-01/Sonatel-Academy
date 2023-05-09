const nom = document.querySelector('.nom')
const prenom = document.querySelector('.prenom')
const numero = document.querySelector('.numero')
const email = document.querySelector('.mail')
const solde = document.querySelector('.solde')
const img = document.querySelector('.img')
const next = document.querySelector('.next')
const receiver = document.querySelector('.receiver')
const montant = document.querySelector('.montant')
const transactionSens = document.querySelector('#transactionType');
const valideTransaction =document.querySelector('#valid_transaction')
const eye = document.querySelector('.eye')
const tbody = document.querySelector('tbody')
const seeUser = document.querySelector('#seeUser')
const modaltransaction = document.querySelector('.modal_trans')
const search = document.querySelector('.search')
const result = document.querySelector('.result')
const btnSearch = document.querySelector('.searcherBtn')
const addUser = document.querySelector('.addUser')
//veriables globaux
//quand on clique sur adtransaction on actulise les données

let users = [
    {
        id: 0,
        lastname: 'Edwards',
        firstname: 'Snowden',
        phone: '771234',
        email: 'edsnow@nsa.com',
        profilpic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        transaction: [],
        solde: 1000
        },
        {
        id: 1,
        lastname: 'Doe',
        firstname: 'John',
        phone: '781325',
        email: 'test@s.com',
        profilpic: "https://media.istockphoto.com/id/1148283023/photo/neuron-cell-network-inside-the-brain.jpg?s=612x612&w=is&k=20&c=o86iqUReH_4PtAerHrbmNrSpQT4VHwDwxEsG9kfIB6Y=",
        transaction: [],
        solde: 1000
    },
    {
        id: 2,
        lastname:"mamadou",
        firstname:"diop",
        phone:"764321",
        email:"mdiop@test.com",
        profilpic:"https://images.unsplash.com/photo-1541411780127-15d88bd3476d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
        transaction: [],
        solde: 1000
    },
    {
        id: 3,
        lastname:"ibrahima",
        firstname:"ndiaye",
        phone:"759825",
        email:"ibndiaye@t.com",
        profilpic: "https://plus.unsplash.com/premium_photo-1669842504837-ac6c1bad2bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        transaction: [],
        solde: 1000
    },
    {
        id: 4,
        lastname:"fallou",
        firstname:"sow",
        phone:"707659",
        email:"fsow@test",
        profilpic: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        transaction: [],
        solde: 1000
    },
    {
        id: 5,
        lastname:"moussa",
        firstname:"diouf",
        phone:"745129",
        email:"mdiouf.com",
        profilpic: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        transaction: [],
        solde: 1000
    }
]
let sens = "Dépôt"
let id = 0
//evenements
addUser.addEventListener('click', () => {
    showError("Cette fonctionnalité n'est pas encore disponible")
})
seeUser.addEventListener('click', () => {
    if(nom.innerHTML == "..." || prenom.innerHTML == "..." || numero.innerHTML == "..." || email.innerHTML == "..." || solde.innerHTML == "..." || img.src == "..."){
        showError("Veuillez choisir un utilisateur")
        seeUser.removeAttribute('data-toggle')
    }else{
        seeUser.setAttribute('data-toggle', 'modal')
    }
})
montant.addEventListener('keyup', () => {
    montant.value = isNumber(montant.value)
    montantControl()
})
transactionSens.addEventListener('change', () => {
    let sensSelectionné = transactionSens.value
    if(sensSelectionné == "d"){
        sens = "Dépôt"
    }else if(sensSelectionné == "r"){
        sens = "Retrait"
    }
})
next.addEventListener('click', () => {
    let user = shuffleuser(users)
    id = user.id
    nom.innerHTML = user.lastname
    prenom.innerHTML = user.firstname
    numero.innerHTML = user.phone
    email.innerHTML = user.email
    solde.innerHTML = user.solde
    img.src = user.profilpic
    chargerTransaction2(id)
})
valideTransaction.addEventListener('click', () => {
    let receiverNumber = receiver.value;
    let transactionAmount = montant.value;
    let receiverUser = users.find(user => user.phone == receiverNumber)
    let senderUser = users.find(user => user.id == id)
    console.log("envoyeur", senderUser);
    console.log("receveur", receiverUser);
    if(senderUser.solde < montant.value){
        showError("Votre solde est insuffisant")
        return
    }
    if(receiverUser == undefined){
        senderUser.solde -= parseInt(transactionAmount)
            let transaction = {
                numero: senderUser.transaction.length + 1,
                date: new Date().toLocaleDateString(),
                sens: sens,
                montant: transactionAmount
            }
            senderUser.transaction.push(transaction)
            chargerTransaction(id)
            solde.innerHTML = senderUser.solde
        setTimeout(() => {
            senderUser.solde += parseInt(transactionAmount)
            solde.innerHTML = senderUser.solde
            showError("le numero n'existe pas")
            const annuler = document.querySelector(".annuler")
            annuler.style.display = "none"
        }, 2000);
        return
    }
    if (receiverUser.id == senderUser.id) {
       if (sens == "Dépôt") {
        senderUser.solde += parseInt(transactionAmount)
        let transaction = {
            numero: senderUser.transaction.length + 1,
            date: new Date().toLocaleDateString(),
            sens: sens,
            montant: transactionAmount
        }
        senderUser.transaction.push(transaction)
        chargerTransaction2(id)
        solde.innerHTML = senderUser.solde
        return
       }else if(sens == "Retrait"){
              senderUser.solde -= parseInt(transactionAmount)
              if(senderUser.solde < 0){
                senderUser.solde += parseInt(transactionAmount)
                solde.innerHTML = senderUser.solde
                showError("Votre solde est insuffisant")
                return
              }
              let transaction = {
                numero: senderUser.transaction.length + 1,
                date: new Date().toLocaleDateString(),
                sens: sens,
                montant: transactionAmount
              }
              senderUser.transaction.push(transaction)
              chargerTransaction2(id)
              solde.innerHTML = senderUser.solde
              return
         }
    }
    if(sens == "Dépôt"){
        senderUser.solde -= parseInt(transactionAmount)
        receiverUser.solde += parseInt(transactionAmount)
    }else if(sens == "Retrait"){
        senderUser.solde -= parseInt(transactionAmount)
        receiverUser.solde -= parseInt(transactionAmount)
    }
    let transaction = {
        numero: senderUser.transaction.length + 1,
        date: new Date().toLocaleDateString(),
        sens: sens,
        montant: transactionAmount
    }
    senderUser.transaction.push(transaction)
    receiverUser.transaction.push(transaction)
    chargerTransaction(id)
    solde.innerHTML = senderUser.solde
})
eye.addEventListener('click', () => {
    let user = users.find(user => user.phone == receiver.value)
    id = user.id
    if(user == undefined){
        showError("Le numéro de téléphone n'existe pas")
        return
    }
    nom.innerHTML = user.lastname
    prenom.innerHTML = user.firstname
    numero.innerHTML = user.phone
    email.innerHTML = user.email
    solde.innerHTML = user.solde
    img.src = user.profilpic
    chargerTransaction2(user.id)
    console.log(user);
})

search.addEventListener('input', (e) => {
    let value = e.target.value
    let newValue = value.replace(/[^0-9]/g, "");
    search.value = newValue;
    let ul =  document.createElement('ul')
    let filtered = users.filter(user => user.phone.includes(value))
    let div = ''
    result.innerHTML = ''
    filtered.forEach(user => {
        div += `<li class="search_list">${user.phone}</li>`
    })
    if(value == ''){
        result.innerHTML = ''
    }else{
        ul.innerHTML = div
        result.appendChild(ul)
        ul.addEventListener('click', (e) => {
            search.value = e.target.innerHTML
            result.innerHTML = ''
        })
    }
})
btnSearch.addEventListener('click', () => {
    let user = users.find(user => user.phone == search.value)
    if(user == undefined){
        showError("Le numéro entré n'est pas valide")
        return
    }
    nom.innerHTML = user.lastname
    prenom.innerHTML = user.firstname
    numero.innerHTML = user.phone
    email.innerHTML = user.email
    solde.innerHTML = user.solde
    img.src = user.profilpic
    chargerTransaction(user.id)
})

//fonctions
function shuffleuser(users) {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  }

function isNumber(montant){
    if(isNaN(montant)){
        montant = montant.replace(/[^0-9]/g, "")
    }
    return montant
}

function montantControl(){
    if(montant.value < 500){
        valideTransaction.disabled = true
        montant.style.border = "3px solid red"
        valideTransaction.style.opacity = "0.5"
    }else{
        valideTransaction.disabled = false
        montant.style.border = "3px solid green"
        valideTransaction.style.cursor = "pointer"
        valideTransaction.style.opacity = "1"
    }
}

function findUser(id){
    return users.find(user => user.id == id)
}

function chargerTransaction(id){
    let user = findUser(id)
    let transaction = user.transaction
    let html = ""
    transaction.forEach((transaction)=>{
        html += `<tr>
        <td>${transaction.numero}</td>
        <td>${transaction.date}</td>
        <td>${transaction.sens}</td>
        <td>${transaction.montant}</td>
        <td class="btn btn-danger annuler">annuler</td>
        </tr>`
        tbody.innerHTML = html
        const annuler = document.querySelectorAll(".annuler")
        let receiverUser = users.find(user => user.phone == receiver.value)
        annuler.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let user = findUser(id)
                let transaction = user.transaction
                let numero = e.target.parentElement.children[0].innerHTML
                let montant = e.target.parentElement.children[3].innerHTML
                let sens = e.target.parentElement.children[2].innerHTML
                let index = transaction.findIndex(transaction => transaction.numero == numero)
                transaction.splice(index, 1)
                // si le gar a deja retirer
                if(receiverUser.solde < montant){
                   showError("L'utilisateur a deja retirer l'argent")
                   setTimeout(() => {
                          annuler.style.display = "none"
                   }, 20000);    
                     return
                }
                if(sens == "Dépôt"){
                    user.solde += parseInt(montant)
                    receiverUser.solde -= parseInt(montant)
                    receiverUser.transaction.splice(index, 1)
                    btn.style.display = "none"
                    btn.parentElement.style.backgroundColor = "red"
                    btn.parentElement.style.opacity = 0.5
                    btn.parentElement.style.color = "white"
                }else if(sens == "Retrait"){
                    user.solde -= parseInt(montant)
                    receiverUser.solde += parseInt(montant)
                    // if(sens == "Retrait"){           
                    // }
                }
                solde.innerHTML = user.solde
                console.log(user);
                console.log(receiverUser);
            })
        });
    })
}

function showError(message) {
    const errorAlert = document.getElementById('errorAlert');
    errorAlert.innerText = message;
    errorAlert.classList.add('animate__animated', 'animate__slideInRight', 'show');
    setTimeout(() => {
      errorAlert.classList.remove('animate__slideInRight', 'show');
      errorAlert.classList.add('animate__animated', 'animate__slideOutLeft');
      setTimeout(() => {
        errorAlert.classList.remove('animate__animated', 'animate__slideOutLeft');
      }, 1000);
    }, 3000);
}

const minute = document.querySelector(".minutes")
const seconde = document.querySelector(".secondes")

function chargerTransaction2(id){
        let user = findUser(id)
        let transaction = user.transaction
        let html = ""
        transaction.forEach((transaction)=>{
            html += `<tr>
            <td>${transaction.numero}</td>
            <td>${transaction.date}</td>
            <td>${transaction.sens}</td>
            <td>${transaction.montant}</td>
            </tr>`
        })
        tbody.innerHTML = html
}
function chargerUser(){
    let user = shuffleuser(users)
    nom.innerHTML = user.lastname
    prenom.innerHTML = user.firstname
    numero.innerHTML = user.phone
    email.innerHTML = user.email
    solde.innerHTML = user.solde
    img.src = user.profilpic
    chargerTransaction(user.id)
}