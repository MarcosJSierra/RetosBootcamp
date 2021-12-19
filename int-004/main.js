function reverse(string){
    return string.split("").reverse().join("");
}

/**
 * 
 * @param {String} inputString 
 */
function main(inputString){
    let tempString = "";
    let palindrome = "";
    if(inputString.length == 1){
        palindrome = inputString;
    } else {
        for(let i = 0; i < inputString.length; i++){
            for(let j = i + 1; j < inputString.length; j++){
                tempString = inputString.slice(i, j);
                if(tempString === reverse(tempString)){
                    palindrome = (palindrome.length < tempString.length) ? tempString : palindrome;
                }
            }
        }
    }
    console.log(`Input: s = ${inputString}
Output: ${palindrome}`);
    return palindrome;
}

main("babad");
main("cbbd");
main("a");
main("ac");