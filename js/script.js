// Consegna:
// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



        
const arrayPrincipale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const minNum = 3;
const  maxNum = 8;
console.log(arrayPrincipale);



const arrayNew = between(arrayPrincipale, minNum, maxNum);
console.log(arrayNew);





// function

function between(array, num1, num2) {
    const nuovoArray = array.filter ((element) => {
        if(element <= num1 || element >= num2) {
            return false;
            
        }
        return true;
        
    });

    return nuovoArray;
}
