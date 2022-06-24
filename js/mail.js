/* Mail
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/

// Mail

// Steps

// Creo una lista di email

const emails = ['studente@boolean.it' , 'altrostudente@boolean.it' , 'insegnante@boolean.it'];

// Chiedo all'utente la mail da inserire

const button = document.getElementById('button');
const userEmail = document.getElementById('email');
const displayResult = document.getElementById('result');

button.addEventListener('click',function(){
    
    let access = false;
    
    for (i = 0; i < emails.length; i++) {
        
        if(userEmail.value === emails[i]){
            access = true;
        }
    }
    
    if(access){
        displayResult.innerText = "Benvenuto!";
    } else{
        displayResult.innerText = "Spiacenti! L'email non è valida o presente nell'elenco";
    }
    
})