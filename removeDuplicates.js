const HashMap = require('./hashMap');

function removeDuplicates(string) {
    let checkMap = new HashMap();
    let stringArr = string.split('');
    // place individual letters into hashmap (duplicates aren't included in hashmap)
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === ' ') {
            continue;
        }
        checkMap.set(stringArr[i], stringArr[i]);
    }
    let newArr = [];
    // place items from hashmap into container array
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
    // join items from container array to form new non-duplicate string
    let noDuplicateString = newArr.join('');
    return noDuplicateString;
}

console.log(removeDuplicates('google'));
console.log(removeDuplicates('google all that you think can think of'));