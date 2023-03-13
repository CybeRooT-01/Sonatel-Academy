
setInterval(() => {
const jours = document.querySelector(".jours")
const heures = document.querySelector(".heures")
const minutes = document.querySelector(".minutes")
const secondes = document.querySelector(".secondes")
let tempsDestination = new Date('December 31, 2024 23:59:59')
let aujourdHui = new Date()
let nombreDeSecondesEnMillisecondes = tempsDestination - aujourdHui 
let nombreDeSecondes = nombreDeSecondesEnMillisecondes /1000
let nombreJours = Math.floor(nombreDeSecondes / ( 60 *60 *24)) //1 jours = (60secondes * 60minutes qui fait 1h ) le tout *24 puisqu'on a 24H
let nombreHeurs = Math.floor((nombreDeSecondes - (nombreJours * 60 * 60 * 24)) / (60 * 60));
let nombreMinutes = Math.floor((nombreDeSecondes - ((nombreJours * 60 * 60 * 24 + nombreHeurs * 60 * 60))) / 60);
let nombreSecondes = Math.floor(nombreDeSecondes - ((nombreJours * 60 * 60 * 24 + nombreHeurs * 60 * 60 + nombreMinutes * 60)));
jours.innerHTML = "-"+ nombreJours
heures.innerHTML = "-"+ nombreHeurs
minutes.innerHTML = "-"+ nombreMinutes
secondes.innerHTML = "-"+ nombreSecondes
}, 1000);


