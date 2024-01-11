// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
nomi = ["Alice", "Bob", "Charlie", "David", "Eva"]
cognomi = ["Rossi", "Bianchi", "Verdi", "Neri", "Gialli"]
function nomeCasuale(min, max){
    min=0
    max=nomi.length
    return Math.floor(Math.random() * (max - min) + min)
}
function cognomeCasuale (min, max){
    min=0
    max=cognomi.length
    return Math.floor(Math.random() * (max - min) + min)
}
for(i=0; i<11 ;i++){
    let nomeCognome= nomi[nomeCasuale()] + " " + cognomi[cognomeCasuale()] 
    document.writeln(nomeCognome)   
}
