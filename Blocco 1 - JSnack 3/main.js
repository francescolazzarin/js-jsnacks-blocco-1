// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let c=0
let parziale=0
for ( c=0; c<=10; c++){
    if (c===10){break}
    let numero=prompt("inserisci un numero")
    numero=parseInt(numero)
    parziale=parziale+numero
}
document.write(parziale)