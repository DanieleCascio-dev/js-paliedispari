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

**Consigli del giorno**

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
