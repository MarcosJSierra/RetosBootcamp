const keys = {
    "(": ")",
    "{": "}",
    "[": "]"
}

const closeKeys = {
    "}": "{",
    "]": "[",
    ")": "("
}

/**
 * 
 * @param {string} inputString 
 * @returns 
 */
function main(inputString){
    let activeKey = [];
    let output = true
    const stringArray = inputString.split("");
    stringArray.forEach((element) => {
        if(element in keys){
            activeKey.push(element);
        }else if(element in closeKeys){
            if(closeKeys[element] == activeKey[activeKey.length - 1]){
                activeKey.pop();
            } else {
                output = false;
            }
        }
    });
    if(output){
        output = activeKey.length > 0 ? false : output;
    }
    console.log(`Input: ${inputString}
Output: ${output}`);
    return output;
}

// console.log(main("({[]})()[]"));
// console.log(main("()"));
// console.log(main("()[]{}"));
// console.log(main("(]"));
// console.log(main("([)]"));
// console.log(main("{[]}"));
main("{[]}");
main("{");
main("{[)");
main("{}([])");