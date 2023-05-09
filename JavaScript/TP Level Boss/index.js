const lightdark  = document.querySelector('.input_toggle');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const header = document.querySelector('.header');
const cours = document.querySelector('.cours');
const search = document.querySelector('.search_form');
const tableHeader = document.querySelectorAll('.table_header');
const jours = document.querySelectorAll('.jours');
const td = document.querySelectorAll('td');
const dayRow = document.querySelectorAll('.day_row');
const libele = document.querySelectorAll('.libele');
const addProgramm = document.querySelector('.add_programm');
const btnContainer = document.querySelector('.btn_container');
const programHeader = document.querySelector('.programm_header');
const btnClose = document.querySelector('.btn_close');
const enseignants = document.querySelector('.enseignant');
const sallesDeClasse = document.querySelector('.salles');
const classesDeCours = document.querySelector('.classes');
const modulesDeCours = document.querySelector('.Modules');
const h5 = document.querySelectorAll('h5');
const btnAddTeacher = document.querySelectorAll('.btn_container_teacher');
const addTeacher = document.querySelector('.teacher');
const visibleTeacher = document.querySelector('.add_professeur');
const closeTeacher = document.querySelector('.close_teacher');
const addClasse = document.querySelector('.classe')
const visibleClasse = document.querySelector('.add_classe');
const closeClasse = document.querySelector('.close_classe');
const addSalle = document.querySelector('.salle');
const visibleSalle = document.querySelector('.add_Salle');
const closeSalle = document.querySelector('.close_salle');
const addModule = document.querySelector('.module');
const visibleModule = document.querySelector('.add_module');
const closeModule = document.querySelector('.close_module');

const enseignantnbr = document.querySelector('.enseignant_nbr');
const salleNbr = document.querySelector('.salle_nbr');
const classeNbr = document.querySelector('.classe_nbr');
const moduleNbr = document.querySelector('.module_nbr');

const trash = document.querySelector('.trash');

const addOnLundi = document.querySelector('.add_on_lundi');
const addOnMardi = document.querySelector('.add_on_mardi');
const addOnMercredi = document.querySelector('.add_on_mercredi');
const addOnJeudi = document.querySelector('.add_on_jeudi');
const addOnVendredi = document.querySelector('.add_on_vendredi');
const addOnSamedi = document.querySelector('.add_on_samedi');

const   addModuleOnday = document.querySelector('.add_module_on_day');
const   addSalleOnday = document.querySelector('.add_salle_on_day');
const   addTeacherOnday = document.querySelector('.add_teacher_on_day');
const   addHeureDebutOnday = document.querySelector('.add_Heure_debut_on_day');
const   addHeureFinOnday = document.querySelector('.add_Heure_fin_on_day');


const newTeacher = document.querySelector('.new_teacher');
const btnToAddTeacher = document.querySelector('.btn_add_teacher');

const newClass = document.querySelector('.new_classe');
const btnToAddClass = document.querySelector('.btn_add_classe');

const newSalle = document.querySelector('.new_salle');
const btnToAddSalle = document.querySelector('.btn_add_salle');

const newModule = document.querySelector('.new_module');
const btnToAddModule = document.querySelector('.btn_add_module');

function sauvegarderTableauLocalStorage(tableau, nom) {
    var tableauJSON = JSON.stringify(tableau);
    localStorage.setItem(nom, tableauJSON);
}
function recupererTableauLocalStorage(nom) {
    var tableauJSON = localStorage.getItem(nom);
    var tableau = JSON.parse(tableauJSON);
    return tableau;
}
  


// let enseignantTab = JSON.parse(localStorage.getItem('enseignantTabs')) || [];
let enseignantTab = recupererTableauLocalStorage('enseignantsTabs') || [];
let salleTab = recupererTableauLocalStorage('salleTabs') || [];
let classeTab = recupererTableauLocalStorage('classeTabs') || [];
let moduleTab = recupererTableauLocalStorage('moduleTabs') || [];

sauvegarderTableauLocalStorage(enseignantTab, 'enseignantsTabs');
btnToAddTeacher.addEventListener('click', () => {
    enseignantTab.push(newTeacher.value);
    visibleTeacher.style.display = 'none';
    enseignantnbr.innerHTML = enseignantTab.length;
    sauvegarderTableauLocalStorage(enseignantTab, 'enseignantsTabs');
});
btnToAddClass.addEventListener('click', () => {
    classeTab.push(newClass.value);
    visibleClasse.style.display = 'none';
    classeNbr.innerHTML = classeTab.length;
    sauvegarderTableauLocalStorage(classeTab, 'classeTabs');
});
btnToAddSalle.addEventListener('click', () => {
    salleTab.push(newSalle.value);
    visibleSalle.style.display = 'none';
    salleNbr.innerHTML = salleTab.length;
    sauvegarderTableauLocalStorage(salleTab, 'salleTabs');
});
btnToAddModule.addEventListener('click', () => {
    moduleTab.push(newModule.value);
    visibleModule.style.display = 'none';
    moduleNbr.innerHTML = moduleTab.length;
    sauvegarderTableauLocalStorage(moduleTab, 'moduleTabs');
});

//ajouter un enseignant sur le select
const select = document.querySelector('.select');
enseignants.addEventListener('click', () => {
    enseignants.style.backgroundColor = 'rgb(39, 196, 224)';
    sallesDeClasse.style.backgroundColor = 'rgb(190, 190, 188)';
    classesDeCours.style.backgroundColor = 'rgb(190, 190, 188)';
    modulesDeCours.style.backgroundColor = 'rgb(190, 190, 188)';
    select.innerHTML = '';
    enseignantTab.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        select.appendChild(option);
    });
});
enseignantnbr.innerHTML = enseignantTab.length;

sallesDeClasse.addEventListener('click', () => {
    sallesDeClasse.style.backgroundColor = 'rgb(32, 158, 16)';
    enseignants.style.backgroundColor = 'rgb(190, 190, 188)';
    classesDeCours.style.backgroundColor = 'rgb(190, 190, 188)';
    modulesDeCours.style.backgroundColor = 'rgb(190, 190, 188)';
    select.innerHTML = '';
    salleTab.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        select.appendChild(option);
    });
});
salleNbr.innerHTML = salleTab.length;
classesDeCours.addEventListener('click', () => {
  classesDeCours.style.backgroundColor = 'rgb(234, 129, 10)';
    enseignants.style.backgroundColor = 'rgb(190, 190, 188)';
    sallesDeClasse.style.backgroundColor = 'rgb(190, 190, 188)';
    modulesDeCours.style.backgroundColor = 'rgb(190, 190, 188)';
    select.innerHTML = '';
    classeTab.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        select.appendChild(option);
    });
});
classeNbr.innerHTML = classeTab.length;
modulesDeCours.addEventListener('click', () => {
    modulesDeCours.style.backgroundColor = 'rgb(255, 5, 5)';
    enseignants.style.backgroundColor = 'rgb(190, 190, 188)';
    sallesDeClasse.style.backgroundColor = 'rgb(190, 190, 188)';
    classesDeCours.style.backgroundColor = 'rgb(190, 190, 188)';
    select.innerHTML = '';
    moduleTab.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        select.appendChild(option);
    });
});
moduleNbr.innerHTML = moduleTab.length;

//nettoyer la local storage
trash.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
});
// afficher / masquer les fenetres d'ajout(professeur, classe, salle, module)
addModule.addEventListener('click', () => {
    visibleModule.style.display = 'block';
    closeModule.addEventListener('click', () => {
        visibleModule.style.display = 'none';
    });
});
addSalle.addEventListener('click', () => {
    visibleSalle.style.display = 'block';
    closeSalle.addEventListener('click', () => {
        visibleSalle.style.display = 'none';
    });
});

addClasse.addEventListener('click', () => {
    visibleClasse.style.display = 'block';
    closeClasse.addEventListener('click', () => {
        visibleClasse.style.display = 'none';
    });
});

addTeacher.addEventListener('click', () => {
    visibleTeacher.style.display = 'block';
    closeTeacher.addEventListener('click', () => {
        visibleTeacher.style.display = 'none';
    });
});
//ajouter les elements au tableau addProgramm
function optionModule(tableau, ouAjouter) {
    tableau.forEach((item) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        ouAjouter.appendChild(option);
    });
}
optionModule(moduleTab, addModuleOnday);
optionModule(enseignantTab, addTeacherOnday);
optionModule(salleTab, addSalleOnday);
//recherche 
const searchResultList = document.querySelector('.search_result');
search.addEventListener('input', () => {
    let searchValue = search.value.toLowerCase();
    if (searchValue == "") {
        searchResultList.innerHTML = "";
        return;
    }
    let searchResult = enseignantTab.filter((item) => {
        return item.toLowerCase().includes(searchValue);
    });
    let searchResult2 = moduleTab.filter((item) => {
        return item.toLowerCase().includes(searchValue);
    });
    let searchResult3 = salleTab.filter((item) => {
        return item.toLowerCase().includes(searchValue);
    });
    let searchResult4 = classeTab.filter((item) => {
        return item.toLowerCase().includes(searchValue);
    });
    let searchResult5 = searchResult.concat(searchResult2, searchResult3, searchResult4);
    let searchResult6 = searchResult5.filter((item, index) => {
        return searchResult5.indexOf(item) === index;
    });
    searchResultList.innerHTML = '';
    //afficher les resultats en bas du search sous forme de liste
    searchResult6.forEach((item) => {
        let li = document.createElement('li');
        li.innerHTML = item;
        searchResultList.appendChild(li);
        li.addEventListener('click', () => {
            search.value = item;
            searchResultList.innerHTML = '';
        });
    });
});
        

//ouvrire /fermer la fenetre
btnClose.addEventListener('click', () => {
    addProgramm.style.display = 'none';
});
// ajouter dynamiquement les elements dans le tableau
const btnAdd = document.querySelector('.btn_add');

addOnLundi.addEventListener('click', () => {
    addOnLundi.classList.add('active');
    addOnMardi.classList.remove('active');
    addOnMercredi.classList.remove('active');
    addOnJeudi.classList.remove('active');
    addOnVendredi.classList.remove('active');
    addOnSamedi.classList.remove('active');
    addProgramm.style.display = 'block';
});

addOnMardi.addEventListener('click', () => {
    addOnLundi.classList.remove('active');
    addOnMardi.classList.add('active');
    addOnMercredi.classList.remove('active');
    addOnJeudi.classList.remove('active');
    addOnVendredi.classList.remove('active');
    addOnSamedi.classList.remove('active');
    addProgramm.style.display = 'block';
});

addOnMercredi.addEventListener('click', () => {
    addOnLundi.classList.remove('active');
    addOnMardi.classList.remove('active');
    addOnMercredi.classList.add('active');
    addOnJeudi.classList.remove('active');
    addOnVendredi.classList.remove('active');
    addOnSamedi.classList.remove('active');
    addProgramm.style.display = 'block';
});
addOnJeudi.addEventListener('click', () => {
    addOnLundi.classList.remove('active');
    addOnMardi.classList.remove('active');
    addOnMercredi.classList.remove('active');
    addOnJeudi.classList.add('active');
    addOnMercredi.classList.remove('active');
    addOnVendredi.classList.remove('active');
    addOnSamedi.classList.remove('active');
    addProgramm.style.display = 'block';
});
addOnVendredi.addEventListener('click', () => {
    addOnLundi.classList.remove('active');
    addOnMardi.classList.remove('active');
    addOnMercredi.classList.remove('active');
    addOnJeudi.classList.remove('active');
    addOnVendredi.classList.add('active');
    addOnSamedi.classList.remove('active');
    addProgramm.style.display = 'block';
});
addOnSamedi.addEventListener('click', () => {
    addOnLundi.classList.remove('active');
    addOnMardi.classList.remove('active');
    addOnMercredi.classList.remove('active');
    addOnJeudi.classList.remove('active');
    addOnVendredi.classList.remove('active');
    addOnSamedi.classList.add('active');
    addProgramm.style.display = 'block';
});
// ajouter un element dans l'emploi du temps
const  lundi = document.querySelector(".lundi");
const  mardi = document.querySelector(".mardi");
const  mercredi = document.querySelector(".mercredi");
const  jeudi = document.querySelector(".jeudi");
const  vendredi = document.querySelector(".vendredi");
const  samedi = document.querySelector(".samedi");

const errorZone = document.querySelector(".error_zone")

// function ajouterCours(jour,debut, fin,couleur) {
//     if (debut < 8 || fin > 17 || debut >= fin) {
//       return;
//     }
//     let debutIndex = debut - 8;
//     let finIndex = fin - 8;
//     for (let i = debutIndex; i < finIndex; i++) {
//         jour.children[i+1].style.backgroundColor = couleur;
//     }
//     // //met le premier element du cour en blanc
//     // jour.children[debutIndex+1].style.backgroundColor = "white";
//     // jour.children[debutIndex+1].setAttribute("colspan",finIndex-debutIndex);
// }

function ajouterCours2(jour,debut, fin,couleur) {
    if (debut < 8 || fin > 17 || debut >= fin) {
      return;
    }
    let debutIndex = debut - 8;
    let finIndex = fin - 8;
    let dist = finIndex - debutIndex
    jour.children[debutIndex+1].style.backgroundColor = couleur;
    jour.children[debutIndex+1].setAttribute("colspan",dist) ;
    //enlever les colonnes qui vont gener la prochaine cellule
    for (let i = debutIndex+2; i < finIndex+1; i++) {
        jour.children[i].style.display = "none";
    }
}
let objgeneral = {
    lundi: [],
    mardi: [],
    mercredi: [],
    jeudi: [],
    vendredi: [],
    samedi: []
}
let newTab = [];

btnAdd.addEventListener('click', () => {
    // addProgramm.style.display = 'none';
    let addModuleOnday = document.querySelector('.add_module_on_day');
    let addSalleOnday = document.querySelector('.add_salle_on_day');
    let addTeacherOnday = document.querySelector('.add_teacher_on_day');
    let addHeureDebutOnday = document.querySelector('.add_Heure_debut_on_day');
    let addHeureFinOnday = document.querySelector('.add_Heure_fin_on_day');
    newTab = [
        addModuleOnday.value,
        addSalleOnday.value,
        addTeacherOnday.value,
        addHeureDebutOnday.value,
        addHeureFinOnday.value,
    ];
     
    if (addOnLundi.classList.contains('active')){
        let lundiTab = objgeneral.lundi;
        let heureDebut = +newTab[3];
        let heureFin = +newTab[4];
        let heureOccupees = [];
        lundiTab.forEach((item) => {
        let heureItemDebut = +item[3];
        let heureItemFin = +item[4];
        if ((heureDebut >= heureItemDebut && heureDebut < heureItemFin) || (heureFin > heureItemDebut && heureFin <= heureItemFin) || (heureDebut <= heureItemDebut && heureFin >= heureItemFin)){
            heureOccupees.push(`${heureItemDebut}h - ${heureItemFin}h`);
        }
        });
        //si l'heure de debut est plus grand que l'heure de fin
        if (heureOccupees.length > 0) {
        let messageErreur = `impossible d'ajouter ${heureDebut}h - ${heureFin}h car ces cet plage est occupé par ${heureOccupees.join(", ")}.`;
        errorZone.innerHTML = messageErreur;
        setTimeout(() => {
            errorZone.innerHTML = "";
        }, 3000);} else {
        lundiTab.push(newTab);
        console.table(lundiTab);
        lundiTab.forEach((item) => {
            if (heureDebut >= heureFin) {
                let messageErreur = `impossible d'ajouter ${heureDebut}h - ${heureFin}h car l'heure de debut est plus grand que l'heure de fin.`;
                errorZone.innerHTML = messageErreur;
                lundiTab.pop(); //enlever le dernier cours (puisque il est invalide ;-))
                setTimeout(() => {
                    errorZone.innerHTML = "";
                }, 3000);
            } else {
                ajouterCours2(lundi, +item[3], +item[4], "red");
            //ajouter les infos dans la cellule
            let debutIndex = +item[3] - 8;
            lundi.children[debutIndex+1].innerHTML = item[0] + " " + item[1] + " " + item[2];
            }
        });
    }

}
    if (addOnMardi.classList.contains('active')) {
        let mardiTab = objgeneral.mardi;{}
        let heureDebut = +newTab[3];
        let heureFin = +newTab[4];
        let heureOccupees = [];
        mardiTab.forEach((item) => {
        let heureItemDebut = +item[3];
        let heureItemFin = +item[4];
        if ((heureDebut >= heureItemDebut && heureDebut < heureItemFin) ||
            (heureFin > heureItemDebut && heureFin <= heureItemFin) ||
            (heureDebut <= heureItemDebut && heureFin >= heureItemFin)) {
            heureOccupees.push(`${heureItemDebut}h - ${heureItemFin}h`);
        }
        });
        if (heureOccupees.length > 0) {
        let messageErreur = `impossible d'ahouter ${heureDebut}h - ${heureFin}h car ces cet plage est occupé par ${heureOccupees.join(", ")}.`;
        errorZone.innerHTML = messageErreur;
        setTimeout(() => {
            errorZone.innerHTML = "";
        }, 3000);} else {
        mardiTab.push(newTab);
        console.table(mardiTab);
        mardiTab.forEach((item) => {
            ajouterCours2(mardi, +item[3], +item[4], "blue");
            let debutIndex = +item[3] - 8;
            mardi.children[debutIndex+1].innerHTML = item[0] + " " + item[1] + " " + item[2];
         });
    }
    }
    if (addOnMercredi.classList.contains('active')) {
        let mercrediTab = objgeneral.mercredi;
        let heureDebut = +newTab[3];
        let heureFin = +newTab[4];
        let heureOccupees = [];
        mercrediTab.forEach((item) => {
        let heureItemDebut = +item[3];
        let heureItemFin = +item[4];
        if ((heureDebut >= heureItemDebut && heureDebut < heureItemFin) ||
            (heureFin > heureItemDebut && heureFin <= heureItemFin) ||
            (heureDebut <= heureItemDebut && heureFin >= heureItemFin)) {
            heureOccupees.push(`${heureItemDebut}h - ${heureItemFin}h`);
            }
        });
        if (heureOccupees.length > 0) {
        let messageErreur = `impossible d'ahouter ${heureDebut}h - ${heureFin}h car ces cet plage est occupé par ${heureOccupees.join(", ")}.`;
        errorZone.innerHTML = messageErreur;
        setTimeout(() => {
            errorZone.innerHTML = "";
        }, 3000);} else {
        mercrediTab.push(newTab);
        console.table(mercrediTab);
        mercrediTab.forEach((item) => {
            ajouterCours2(mercredi, +item[3], +item[4], 'green');
            let debutIndex = +item[3] - 8;
            mercredi.children[debutIndex+1].innerHTML = item[0] + " " + item[1] + " " + item[2];
        });
    }
    }
    if (addOnJeudi.classList.contains('active')) {
        let jeudiTab = objgeneral.jeudi;
        let heureDebut = +newTab[3];
        let heureFin = +newTab[4];
        let heureOccupees = [];
        jeudiTab.forEach((item) => {
        let heureItemDebut = +item[3];
        let heureItemFin = +item[4];
        if ((heureDebut >= heureItemDebut && heureDebut < heureItemFin) ||
            (heureFin > heureItemDebut && heureFin <= heureItemFin) ||
            (heureDebut <= heureItemDebut && heureFin >= heureItemFin)) {
            heureOccupees.push(`${heureItemDebut}h - ${heureItemFin}h`);
            } 
        });
        if (heureOccupees.length > 0) {
        let messageErreur = `impossible d'ahouter ${heureDebut}h - ${heureFin}h car ces cet plage est occupé par ${heureOccupees.join(", ")}.`;
        errorZone.innerHTML = messageErreur;
        setTimeout(() => {
            errorZone.innerHTML = "";
        }
        , 3000);} else {
        jeudiTab.push(newTab);
        console.table(jeudiTab);
        jeudiTab.forEach((item) => {
            ajouterCours2(jeudi, +item[3], +item[4], 'yellow');
            let debutIndex = +item[3] - 8;
            jeudi.children[debutIndex+1].innerHTML = item[0] + " " + item[1] + " " + item[2];
        });
    }
    }
    if (addOnVendredi.classList.contains('active')) {
        let vendrediTab = objgeneral.vendredi;
        let heureDebut = +newTab[3];
        let heureFin = +newTab[4];
        let heureOccupees = [];
        vendrediTab.forEach((item) => {
        let heureItemDebut = +item[3];
        let heureItemFin = +item[4];
        if ((heureDebut >= heureItemDebut && heureDebut < heureItemFin) ||
            (heureFin > heureItemDebut && heureFin <= heureItemFin) ||
            (heureDebut <= heureItemDebut && heureFin >= heureItemFin)) {
            heureOccupees.push(`${heureItemDebut}h - ${heureItemFin}h`);
            }
        });
        if (heureOccupees.length > 0) {
        let messageErreur = `impossible d'ahouter ${heureDebut}h - ${heureFin}h car ces cet plage est occupé par ${heureOccupees.join(", ")}.`;
        errorZone.innerHTML = messageErreur;
        setTimeout(() => {
            errorZone.innerHTML = "";
        }, 3000);} else {
        vendrediTab.push(newTab);
        console.table(vendrediTab);
        vendrediTab.forEach((item) => {
            ajouterCours(vendredi, +item[3], +item[4], 'orange');
            let debutIndex = +item[3] - 8;
            vendredi.children[debutIndex+1].innerHTML = item[0] + " " + item[1] + " " + item[2];
        });
    }
    }
    if (addOnSamedi.classList.contains('active')) {
        let samediTab = objgeneral.samedi;
        let heureDebut = +newTab[3];
        let heureFin = +newTab[4];
        let heureOccupees = [];
        samediTab.forEach((item) => {
        let heureItemDebut = +item[3];
        let heureItemFin = +item[4];
        if ((heureDebut >= heureItemDebut && heureDebut < heureItemFin) ||
            (heureFin > heureItemDebut && heureFin <= heureItemFin) ||
            (heureDebut <= heureItemDebut && heureFin >= heureItemFin)) {
            heureOccupees.push(`${heureItemDebut}h - ${heureItemFin}h`);
            }
        });
        if (heureOccupees.length > 0) {
        let messageErreur = `impossible d'ahouter ${heureDebut}h - ${heureFin}h car ces cet plage est occupé par ${heureOccupees.join(", ")}.`;
        errorZone.innerHTML = messageErreur;
        setTimeout(() => {
            errorZone.innerHTML = "";
        }, 3000);} else {
        samediTab.push(newTab);
        console.table(samediTab);
        samediTab.forEach((item) => {
            ajouterCours(samedi, +item[3], +item[4], 'red');
            let debutIndex = +item[3] - 8;
            samedi.children[debutIndex+1].innerHTML = item[0] + " " + item[1] + " " + item[2];
        });
    }
    }
});
//dragging du fenetre
let isDragging = false;
let mouseOffsetX = 0;
let mouseOffsetY = 0;

programHeader.addEventListener("mousedown", startDragging);
function startDragging(event) {
    event.preventDefault(); 
    isDragging = true;
    mouseOffsetX = event.clientX - programHeader.offsetLeft;
    mouseOffsetY = event.clientY - programHeader.offsetTop;

  document.addEventListener("mousemove", dragProgram);
  document.addEventListener("mouseup", stopDragging);
}
function dragProgram(event) {
  if (isDragging) {
    const newLeft = event.clientX - mouseOffsetX;
    const newTop = event.clientY - mouseOffsetY;
    addProgramm.style.left =  360 + newLeft + "px";
    addProgramm.style.top = 140 + newTop + "px";
  }
}
function stopDragging() {
  isDragging = false;
  document.removeEventListener("mousemove", dragProgram);
  document.removeEventListener("mouseup", stopDragging);
}


//light / dark mode
lightdark.addEventListener('click', () => {
    document.body.classList.toggle('light');
    left.classList.toggle('left_light');
    right.classList.toggle('left_light');
    header.classList.toggle('header_light');
    cours.classList.toggle('header_light');
    search.classList.toggle('search_light');
    jours.forEach((item) => {
        item.classList.toggle('header_light');
    });
    tableHeader.forEach((item) => {
        item.classList.toggle('left_light');
    });
    td.forEach((item) => {
        item.classList.toggle('left_light');
    });
    dayRow.forEach((item) => {
        item.classList.toggle('day_row_light');
    });
    btnContainer.classList.toggle('btn_container_light');
    programHeader.classList.toggle('btn_container_light');
    h5.forEach((item) => {
        item.classList.toggle('h5_light');
    });
    btnAddTeacher.forEach((item) => {
        item.classList.toggle('h5_light');
    });
    searchResultList.classList.toggle('search_result')
    searchResultList.classList.toggle('search_result_light');
})