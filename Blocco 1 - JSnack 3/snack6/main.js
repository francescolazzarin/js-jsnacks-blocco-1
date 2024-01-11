// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let numero=prompt("inserisci un numero")
numero=parseInt(numero)
for (i=0; i<=numero ; i++){
    let cubo=i*i*i
    let risultato= cubo
    document.writeln(risultato)
}