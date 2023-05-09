const etudiants = [
    {
        id:11,
        nom: "Kadiatou BA",
        paiements: [
            {mois:1, montant: 55000, avance:0},
            {mois:2, montant: 55000, avance:0},
            {mois:3, montant: 55000, avance:0},
            {mois:4, montant: 55000, avance:0},
            {mois:5, montant: 50000, avance:0},
            {mois:6, montant: 55000, avance:0},
            {mois:7, montant: 55000, avance:0},
            {mois:8, montant: 40000, avance:0},
            {mois:9, montant: 55000, avance:0},
            {mois:10, montant: 55000, avance:0},
            {mois:11, montant: 55000, avance:0},
            {mois:12, montant: 55000, avance:0},
        ]
    },
    {
        id:12,
        nom: "Diogal NDIAYE",
        paiements: [
            {mois:1, montant: 55000, avance:55000},
            {mois:2, montant: 55000, avance:5000},
            {mois:3, montant: 55000, avance:0},
            {mois:4, montant: 55000, avance:0},
            {mois:5, montant: 50000, avance:0},
            {mois:6, montant: 55000, avance:0},
            {mois:7, montant: 55000, avance:0},
            {mois:8, montant: 40000, avance:0},
            {mois:9, montant: 55000, avance:0},
            {mois:10, montant: 55000, avance:0},
            {mois:11, montant: 55000, avance:0},
            {mois:12, montant: 55000, avance:55000},
        ]
    }
];




const infoName = document.querySelector('#nameInfo');
const infoYear = document.querySelector('#yearInfo');
const select = document.querySelector('#selectEtudiant');
const months = document.querySelectorAll('.month');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.closeModal');
const btnCancel = document.querySelector('#close');
const btnSave = document.querySelector('#save');
const mnt = document.getElementById('mnt');

const tabMonths = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];

btnCancel.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);

let idSelectedStudent = 0;
let selectedMonth = 0;


btnSave.addEventListener('click',()=>{
    // idEtudiant
    //moisPaye
    //montant PAye
    console.log(idSelectedStudent,selectedMonth,mnt.value)
    etudiants.forEach(et => {
        if(et.id == idSelectedStudent){
            moisActu = selectedMonth.split('_')[1];
            et.paiements[moisActu-1].avance += +mnt.value;
            console.table(et.paiements);
            //fermer le modal
            toggleModal();
            //actualiser le DOM
            printInfos(et);
        }
    });
});

months.forEach(m => {
    m.addEventListener('click',()=>{
        if(idSelectedStudent != 0){
            //
            let moisActu = m.id;
            selectedMonth = m.id;
            moisActu = moisActu.split('_')[1];
            const etu = getEtuById(idSelectedStudent);
            const infoMonth = etu.paiements[moisActu-1];
            //
            const modalTitle = document.getElementById('modalTitle');
            modalTitle.innerHTML = 'Mensualite du mois de '+ tabMonths[infoMonth.mois-1];
            //
            mnt.value = infoMonth.montant - infoMonth.avance;
            mnt.setAttribute('max',infoMonth.montant - infoMonth.avance)
            //
            toggleModal();
        }
    });
});

// let html ='';





// window.onload = printInfos;


// setTimeout(function(){
//     printInfos(kadiatou)
// },5000)

chargerSelect();



select.addEventListener('change',()=>{
    const currentId = select.value;
    const currentEtu = getEtuById(currentId);
    idSelectedStudent = currentId;
    if(currentEtu != undefined){
        printInfos(currentEtu);
    }
    
});



function toggleModal(){
    modal.classList.toggle('close');
}
function getEtuById(idEtu){
    return etudiants.find(e=>e.id==idEtu);
}

function chargerSelect(){
    select.innerHTML = `<option value="0">Choisir un etudiant</option>`;
    etudiants.forEach(etu => {
    // html += `<option value="1">${etu.nom}</option>`;
    select.innerHTML += `<option value="${etu.id}">${etu.nom}</option>`;
});
}
function printInfos(etudiant){
    etudiant.paiements.forEach(p => {
        const idMonth = `#mois_${+p.mois}`;
        const month = document.querySelector(idMonth);
    
        let etat = 'PAYE';
        if(p.avance == 0){
            etat = "IMPAYE"
        }else if(p.avance < p.montant){
            etat = p.avance + ' | '+ (p.montant-p.avance)+' FCFA'
        }
    
        const html = `
            <span>${p.montant}</span>
            <span>${tabMonths[p.mois-1]}</span>
            <span>${etat}</span>
            <span class="plus"> + </span>
        `;
        //
        month.innerHTML = html;
        //
        infoName.innerHTML = etudiant.nom;
    });
}








// function printInfo(etudiant){

// }