/**
 * 
 * @param {Array} numberArray 
 */
function processNumber(numberArray){
    const reverseArray = numberArray.reverse();
    let total = 0;
    let multi = 1;
    reverseArray.forEach(number => {
        total = total + (number * multi);
        multi *= 10;
    })
    total += 1;
    return total;
}

console.log(processNumber([1,2,3]));
console.log(processNumber([4,3,2,1]));