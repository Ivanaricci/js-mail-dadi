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


