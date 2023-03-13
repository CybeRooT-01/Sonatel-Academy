//selection
const lengthInput = document.getElementById("password-length");
const errorArea = document.querySelector(".error")
const passwordInput = document.getElementById("password");
const generateButton = document.getElementById("generate-password");
const copyButton = document.getElementById("copy-password");
const lengthError = document.getElementById("password-length-error");

//fonctions
function generatePassword() {
  let includeUppercase = document.getElementById("include-uppercase").checked;
  let includeLowercase = document.getElementById("include-lowercase").checked;
  let includeNumbers = document.getElementById("include-numbers").checked;
  let includeSpecialChars = document.getElementById("include-special-chars").checked;
  let passwordLength = parseInt(lengthInput.value);
  let numCategories = 0;
  if (includeUppercase) numCategories++;
  if (includeLowercase) numCategories++;
  if (includeNumbers) numCategories++;
  if (includeSpecialChars) numCategories++;
  if (passwordLength < numCategories) {
    errorArea.innerHTML = "La longueur du mot de passe doit être supérieure au nombre de catégories sélectionnées"
    errorArea.style.color = "red";
    setTimeout(() => {
      errorArea.innerHTML = "";
    }, 5000);
  return;
  }
  let possibleChars = "";
  if (includeUppercase) possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) possibleChars += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) possibleChars += "0123456789";
  if (includeSpecialChars) possibleChars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let password = "";
  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars.charAt(randomIndex);
  }
  passwordInput.value = password;
}
function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  if(passwordInput.value == ""){
    errorArea.innerHTML = "Veuillez d'abord générer un mot de passe"
    errorArea.style.color = "red";
    setTimeout(() => {
      errorArea.innerHTML = "";
    }, 5000);
    return;
  }
  errorArea.innerHTML = "Le mot de passe a été copié dans le presse-papiers"
  errorArea.style.color = "green";
  setTimeout(() => {
    errorArea.innerHTML = "";
  }, 5000);
}
function testPassLen(){
  let value = lengthInput.value;
  let newValue = value.replace(/[^0-9]/g, "");
  if (value !== newValue) {
    lengthInput.value = newValue;
    errorArea.innerHTML = "Veuillez entrer un nombre valide"
    errorArea.style.color = "red";
    setTimeout(() => {
      errorArea.innerHTML = "";
    }, 5000);
  }
}
//evenements
generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
lengthInput.addEventListener("input", testPassLen);
  