// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
  let arrayNumeri= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let somma=0
  for(i=0 ; i<arrayNumeri.length ; i++){
    if (i % 2 !== 0 ){
        somma+= arrayNumeri[i]
    }
  }
document.writeln(somma)