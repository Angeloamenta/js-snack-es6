// Consegna:
// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



        
const arrayPrincipale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayTwo = 
[
    "pippo",
    "pino",
    "mario",
    "elisabetta",
    "thomas",
    "chiara",
    "paolo",
    "marco",
    "peppe",
    "homer"
]
const minNum = 3;
const  maxNum = 8;



const arrayNew = between(arrayPrincipale, minNum, maxNum);
console.log(arrayPrincipale);
console.log(arrayNew);

const arrayProva = between(arrayTwo, minNum, maxNum);
console.log(arrayTwo);
console.log(arrayProva);



// function

function between(array, num1, num2) {
    const nuovoArray = array.filter ((element, index) => {
        // console.log(element);
        // console.log(index);
       
        if(index <= num1 || index >= num2) { 
            return false;
            
        }
        return true;
    });
    
    return nuovoArray;
}

//nota
//volendo inserire anche num1 e num2 nella selezione, si potrebbe semplicemente mettere "num1 -1" e "num +1" in questo modo si avrebbero compresi anche i numeri che fanno da inizio e fine.
