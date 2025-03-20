// Mail
// Crea una lista di email di invitati ad una festa.
//  Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 

// Creazione array con lista delle email (partecipanti alla festa)
// chiedere all'utente di scrivere la mail
// confrontare la mail inserita dall'utente con quella presente nell'array
// Se è presente nell'array stampiamo il messaggio: Accesso consentito
// Se non è presente nell'array stampiamo il messaggio: L'invito non è stato inviato. L'accesso non è consentito


const emailList = ['mariorossi@gmail.com', 'giordanobruno@gmail.com', 'serenaconvertino@gmail.com', 'giorgioguarnieri@gmail.com', 'luciobianchi@gmail.com'];

let userEmail = prompt('inserisci la tua e-mail');

let validityEmail = false

for( let i = 0; !validityEmail && i < emailList.length; i++){
    if(emailList[i] === userEmail){
        validityEmail = true
    }
}

if(validityEmail){
    console.log('Accesso consentito')
}

else(
    console.log('L\'invito non è stato inviato. L\'accesso non è consentito')
)



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Un prompt per l'utente (per inserire il numero)
// Un prompt random della macchina (che generi un numero random)
// Se il numero dell'utente è più alto di quello della macchina vince
// Altrimenti perde



let numUser = Math.floor(Math.random() * 6 ) +1
let nameUser = 'Giocatore1'
console.log(numUser +' '+ nameUser)

let numMachine = Math.floor(Math.random() * 6 ) +1
let nameMachine = 'Computer'
console.log(numMachine +' '+ nameMachine)

for(i=1; i<=6; i++){
    if(numUser<numMachine){
        console.log('Hai perso')
    }
    else if(numUser>numMachine){
        console.log('Hai vinto')
    }
    else(
        console.log('Pareggio')
    )
}


// let numUser = prompt('inserisci un numero da 1 a 6')

// let numRandom = Math.floor(Math.random() * 6 ) +1
// console.log(numRandom)

// for(let i=1; i<=6; i++){
//     if(numUser<numRandom)
//         console.log('Hai perso')

//     else(
//         console.log('Hai vinto')
//     )
// }
