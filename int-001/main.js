const stringValues = {
    "1": [""],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
    "0": [" "]
}

/**
 * 
 * @param {String} entryString 
 */
function stringToArray(entryString){
    let entryLength = entryString.length;
    let entryArray = [];
    let contador = 0;
    while(contador < entryLength){
        entryArray.push(entryString.charAt(contador++));
    }
    return entryArray;
}

/**
 * 
 * @param {String} entryString 
 */
function stringProcessor(entryString){
    console.log(`Entrada: digitos = "${entryString}"`);
    let entryArray = stringToArray(entryString);
    let finalArray = [];
    let tmpArray = [""];
    entryArray.forEach(element => {
        finalArray = [];
        tmpArray.forEach(newString => {
            stringValues[element].forEach(letter =>{
                finalArray.push(newString+letter);
            });
        });
        tmpArray = [...finalArray];
    });
    console.log("Salida: ", finalArray);
    return finalArray;
}

/**
 * 
 * @param {String} entryString 
 */
function validateRestrictions(entryString){
    let error = false;
    if(entryString.length < 0 || entryString.length > 4){
        error = true;
        console.log("ERROR: el numero maximo de elementos aceptables es 4\n");
    }
    if(entryString.includes("1") || entryString.includes("*") || entryString.includes("0") || entryString.includes("#")){
        error = true;
        console.log("ERROR: La cadena no puede incluir los valores 1, 0, * ni #\n");
    }
    if(error){
        return[];
    }else{
        return stringProcessor(entryString);
    }

}
console.log(validateRestrictions("23"));
console.log(validateRestrictions("2"));