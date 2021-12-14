// Consegna:
// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// function selection(array, num1, num2) {
//     const array = 
//     for (var i = num1; i <= num2; i++) {
//         array.push(i);
//     }
//     return array
// }


const arrayPrincipale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const minNum = 3;
const  maxNum = 8;
console.log(arrayPrincipale);
// const provaarray = selection(arrayPrincipale, minNum, maxNum);
// console.log(provaarray);

// for (let i = minNum; i < arrayPrincipale.length; i++) {
//     const element = arrayPrincipale[i];
//     console.log(element);
    
// }

const nuovoArray = arrayPrincipale.filter ((element) => {
    if(element <= minNum || element >= maxNum) {
        return false;
        
    }
    return true;
    
});

console.log(nuovoArray);