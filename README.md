##Esercizio

**Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

**Soluzione**

#Dati

1. Inserisco un prompt per chiedere all'utente una parola

#Logica

1. Dichiaro una funzione isItPalindrom(userWord){}
   2 Definisco la funzione:
   let found = false;
   if(userWord[0] === userWord[userWord.length - 1]){
   found = true;
   }
   return found;
2. invoco la funzione:
   if (isItPalindrom === true){
   console.log("La parola inserita è palindorma);
   } else{
   console.log("La parola inserita non è palindorma);
   }

**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

**Soluzione**

#Dati

1. L'utente inserisce se sceglie pari o dispari. const userChoice = prompt(""Scegli pari o dispari);
2. L'utente inserisce un numero da 1 a 5. const userNum = parseInt(prompt(""Scegli un numero da 1 a 5));

#Logica

1. creo una funzione che mi crea un numero random da 1 a 5. Function rndNum (min, max){
   return Math.floor(Math.random() \* (max - min) ) + min;

} 2. assegno questo valore ad una const computerNum; 3. Sommo i due numeri: let somma = userNum + computerNum; 4. creo una funzione per sabilire se un numero è pari:
function evenOrOdd(num){
let found = false
if(num % 2 === 0){
found = true
}
return found;
} 5. if (evenOrOdd(somma) && userChoice === "pari" || !evenOrOdd(somma) && userChoice === "dispari"){
Console.log("Ha vinto il giocatore!);
}
else {
console.log("Ha vinto il computer!")
}
**Consigli del giorno**

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
