/**
 * 
 * @param {Array} numberArray 
 */
function processNumber(numberArray){
    console.log("Entrada: digitos =", numberArray);
    const reverseArray = numberArray.reverse();
    let total = 0;
    let multi = 1;
    reverseArray.forEach(number => {
        total = total + (number * multi);
        multi *= 10;
    })
    let entero = total;
    total += 1;
    let enteroPlus = total;
    let newArray = [];
    let tmp = 0;
    multi /= 10;
    while(multi >= 1){
        tmp = parseInt(total/multi);
        total -= tmp * multi;
        multi /= 10;
        newArray.push(tmp);
    }
    console.log("Salida: ", newArray);
    console.log(`
    Explicacion: El array repersenta el entero ${entero}
    Incrementar en uno da ${entero} + 1  = ${enteroPlus}
    por lo tanto e lresultado es [${newArray}]
    `);
    return newArray;
}
/**
 * 
 * @param {Array} numberArray 
 */
function validateRestrictions(numberArray){
    let error = false
    if(numberArray.length > 100){
        console.log("ERROR: La cantidad maxima de elementos es 100 \n");
        error = true;
    }
    if(numberArray.length < 1){
        console.log("ERROR: La cantidad minima de elementos es 1 \n");
        error = true;
    }
    let lastNumber = 100000;
    numberArray.forEach(number => {
        if(number > 9 || number < 0){
            console.log("ERROR: los numeros no pueden ser mayores que 9 ni menores que 0 \n");
            error =  true;
        }
        if(number > 0 && lastNumber == 0){
            console.log("ERROR: No se permiten ceros a la izquierda del numero \n");
            error = true;
        }
        lastNumber = number
    });
    if(error){
        return [];
    }else{
        return(processNumber(numberArray));
    }
    
}

// validateRestrictions([1,2,3]))
// validateRestrictions([4,3,2,1])
// validateRestrictions([ 5, 3, -1, 8 ]);
// validateRestrictions([0,3,2,1])