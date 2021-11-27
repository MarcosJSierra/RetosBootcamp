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
    let entryArray = stringToArray(entryString);
    let finalArray = [];
    let tmpArray = [""];
    if(entryArray.length <= 4 && entryArray.length > 0){
        entryArray.forEach(element => {
            finalArray = [];
            tmpArray.forEach(newString => {
                stringValues[element].forEach(letter =>{
                    finalArray.push(newString+letter);
                });
            });
            tmpArray = [...finalArray];
        });
    }
    console.log(finalArray);
    return finalArray
}

stringProcessor("23");
stringProcessor("2");