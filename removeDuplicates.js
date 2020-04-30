const HashMap = require('./hashMap');

function removeDuplicates(string) {
    let checkMap = new HashMap();

    let stringArr = string.split('');
    // console.log(stringArr);
    for (let i = 0; i < stringArr.length; i++) {
        checkMap.set(stringArr[i], stringArr[i]);
    }
    // console.log(checkMap);
    // console.log(checkMap);
    let newArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        let letter = stringArr[i];
        let index = checkMap._findSlot(letter);
        console.log('letter', letter, 'index', index, 'checkmap[index]', checkMap._hashTable[index]);
        if (checkMap._hashTable[index]) {
            newArr.push(letter);
            checkMap.delete(letter);
        }
    }
    console.log(newArr);
}

removeDuplicates('google');