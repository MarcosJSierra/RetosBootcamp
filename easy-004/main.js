/**
 * 
 * @param {String} inputString 
 */
function main(inputString){
    /**
     * @type {Object}
     */
    var letter = {
        "letter" : '',
        "quantity": 0
    }
    var letterTemp = {
        "letter" : '',
        "quantity": 0
    }
    for(let i = 0; i < inputString.length; i++){
        if(letterTemp["letter"] === inputString.charAt(i)){ 
            letterTemp["quantity"] += 1;
        } else{
            if(letterTemp["quantity"] > letter["quantity"]){
                letter["letter"] = letterTemp["letter"];
                letter["quantity"] = letterTemp["quantity"];
            }
            letterTemp["letter"] = inputString.charAt(i);
            letterTemp["quantity"] = 1;
        }
    }
    if(letterTemp["quantity"] > letter["quantity"]){
        letter["letter"] = letterTemp["letter"];
        letter["quantity"] = letterTemp["quantity"];
    }
    console.log(`Input: s = ${inputString}
Output: ${letter["quantity"]}`);
    return letter;
}

main("leetcode");
main("abbcccddddeeeeedcba");
main("triplepillooooow");
main("hooraaaaaaaaaaay");
main("tourist");


