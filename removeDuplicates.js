const HashMap = require('./hashMap');

function removeDuplicates(string) {
    let checkMap = new HashMap();
    let stringArr = string.split('');
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === ' ') {
            continue;
        }
        checkMap.set(stringArr[i], stringArr[i]);
    }
    let newArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        let letter = stringArr[i];
        if (letter === ' ') {
            newArr.push(letter);
        }
        let index = checkMap._findSlot(letter);
        if (checkMap._hashTable[index]) {
            newArr.push(letter);
            checkMap.delete(letter);
        }
    }
    let noDuplicateString = newArr.join('');
    return noDuplicateString;
}

console.log(removeDuplicates('google'));
console.log(removeDuplicates('google all that you think can think of'));