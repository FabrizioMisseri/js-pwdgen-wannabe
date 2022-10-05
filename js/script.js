// RACCOGLI DATI INPUT
    // ins nome
let nome = prompt("inserisci il tuo nome");
console.log(nome, typeof(nome));
    while (nome == "") {
        nome = prompt("inserisci il tuo nome testa di cazzo");
    }
    // ins cognome
let cognome = prompt("inserisci il tuo cognome");
console.log(cognome, typeof(cognome));
while (cognome == "") {
    cognome = prompt("inserisci il tuo cognome testa di cazzo");
}
    // ins colore
let colore = prompt("inserisci il tuo colore preferito");
console.log(colore, typeof(colore));
while (colore == "") {
    colore = prompt("inserisci il tuo colore preferito testa di cazzo");
}


// ELABORAZIONE DATI
let password = (nome + cognome + colore + "21");
console.log(password, typeof(password));


// OUTPUT A SCHERMO
document.getElementById("pass").innerHTML = password;
