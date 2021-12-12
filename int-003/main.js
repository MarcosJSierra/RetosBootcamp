
/**
 * 
 * @param {Array} numberArray 
 */
function main(numberArray){
    let maxNumber = 0;
    for(let i = 0; i < (numberArray.length - 1); i++){
        for(let j = (i + 1); j <(numberArray.length); j++){
            if( numberArray[i] < numberArray[j]){
                maxNumber = (maxNumber < (numberArray[i] * (j - i))) ? (numberArray[i] * (j - i)) : maxNumber;
            } else {
                maxNumber = (maxNumber < (numberArray[j] * (j - i))) ? (numberArray[j] * (j - i)) : maxNumber;
            }
            // console.log(` ${numberArray[i]} | ${numberArray[j]} | ${maxNumber}`);
        }
    }
    console.log(`input: ${numberArray}
Output: ${maxNumber}`);
    return maxNumber;
}

// main([1,8,6,2,5,4,8,3,7]);
// main([1,1]);
// main([4,3,2,1,4]);
// main([1,2,1]);
// main([1,6,4,4,7,9,3]);