var nome = prompt("Inserisci il tuo nome.");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");
var data = new Date();
console.log(anno);
var anno = data.getFullYear();
console.log(anno);

document.getElementById('pw').innerHTML = nome+cognome+colore+anno;
document.getElementById("container").setAttribute("class","visibile");
