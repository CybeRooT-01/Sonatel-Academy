// selecteurs
const resultat = document.getElementById('result');
const longueur = document.getElementById('length');
const majuscule = document.getElementById('uppercase');
const minuscule = document.getElementById('lowercase');
const nombres = document.getElementById('numbers');
const caractere_speciaux = document.getElementById('symbols');
const generer = document.getElementById('generate');
const tooltip = document.querySelector(".tooltip")
const result_container= document.querySelector(".result-container")
const clipboard = document.querySelector(".clipboard")
const copie = document.querySelector(".copier")
const notification = document.querySelector(".notif")
// fonctions
const fonction_aleatoire = {
	lower: minuscule_aleatoire,
	upper: majuscule_aleatoire,
	number: nombre_aleatoire,
	symbol: caractere_aleatoire,
};

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typeCount = lower + upper + number + symbol; //calcule le nombre de categorie

    //contient des objets qui représentent les catégories sélectionnées
	const typeArray = [
        { lower },
        { upper }, 
        { number }, 
        { symbol }].filter( 
		(item) => Object.values(item)[0]
	);
	if (typeCount === 0) {
		return '';
	}
	for (let i = 0; i < length; i += typeCount) {
		typeArray.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += fonction_aleatoire[funcName]();
		});
	}
	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}

function minuscule_aleatoire() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function majuscule_aleatoire() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function nombre_aleatoire() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function caractere_aleatoire() {
	const symbols = '~`!#$%^&*()-_+|?.,<>"{}=/';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// evenemennts
result_container.addEventListener("mouseenter", ()=>{
        tooltip.style.visibility = "visible"
})
result_container.addEventListener("mouseleave", ()=>{
        tooltip.style.visibility = "hidden"
})
tooltip.addEventListener("click", ()=>{
	const textarea = document.createElement("textarea");
    const password = resultat.innerText;
    if(!password) return;
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
})

generer.addEventListener('click', () => {
	const length = parseInt(longueur.value);
	if (length < 15 || length > 20) {
		notification.style.visibility = "visible"
		setTimeout(()=>{
			notification.style.visibility = "hidden"
		}, 1000)
	}else{
		const hasLower = minuscule.checked;
		const hasUpper = majuscule.checked;
		const hasNumber = nombres.checked;
		const hasSymbol = caractere_speciaux.checked;
		resultat.innerText = generatePassword(
			hasLower,
			hasUpper,
			hasNumber,
			hasSymbol,
			length
		);
	}
});
clipboard.addEventListener("mouseenter", ()=>{
	copie.style.visibility = "visible"
})
clipboard.addEventListener("mouseleave", ()=>{
	copie.style.visibility = "hidden"
})
clipboard.addEventListener("click", ()=>{
	if (resultat.innerText == "") {
		copie.innerHTML = "copier"
	}else{
		copie.innerHTML = "copié !"
		copie.classList.add("copied")
		copie.style.backgroundColor = "#b1bc19"
		setTimeout(()=>{
			copie.innerHTML = "copier"
			copie.classList.remove("copied")
			copie.style.backgroundColor = "rgba(0,0,0,0.5)"
		}
		, 2000)
	}
})
