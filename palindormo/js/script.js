// Chiedo all'utente la prola
//Dati
const userWord = prompt("Inserisci una parola che credi sia palindroma");
// console.log(userWord[userWord.length - 1]);

//Logica

//Definisco la funzione
function IsItPalindrom(word) {
  let found = false;
  let i = word.length - 1;
  let palindromString = "";
  while (i >= 0) {
    palindromString += word[i];
    i--;
  }
  console.log(palindromString);
  if (palindromString === word) {
    found = true;
  }

  /* let found = false;
  if (word[0] === word[word.length - 1]) {
    found = true;
  }
 */
  return found;
}

//Invoco la funzione
if (IsItPalindrom(userWord)) {
  alert("La parola inserita è palindroma");
} else {
  alert("La parola inserita non è palindroma");
}
