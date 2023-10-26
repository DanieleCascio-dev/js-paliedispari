//Chiedo dati all'utente

const userChoice = prompt("Scegli se pari o dispari");
const userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userChoice, userNum);

//Logica

//Definisco la funzione
function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Invoco la funzione rndNum e la associo ad una variabile
const computerNum = rndNum(1, 5);
console.log(computerNum);

//Sommo i due numei
let somma = userNum + computerNum;
console.log(somma);

//Definisco evenOrOdd
function evenOrOdd(num) {
  let found = false;
  if (num % 2 === 0) {
    found = true;
  }
  return found;
}

if (
  (evenOrOdd(somma) && userChoice === "pari") ||
  (!evenOrOdd(somma) && userChoice === "dispari")
) {
  console.log("Ha vinto il giocatore!");
} else {
  console.log("Ha vinto il computer!");
}
