// RACCOGLI DATI INPUT
    // ins nome
let nome = prompt("inserisci il tuo nome");
console.log(nome, typeof(nome));
    // ins cognome
let cognome = prompt("inserisci il tuo cognome");
console.log(cognome, typeof(cognome));
    // ins colore
let colore = prompt("inserisci il tuo colore preferito");
console.log(colore, typeof(colore));


// ELABORAZIONE DATI
let password = (nome + cognome + "21");
console.log(password, typeof(password));


// OUTPUT A SCHERMO
document.getElementById("pass").innerHTML = password;
