const HashMap = require('./hashMap');

function removeDuplicates(string) {
    let checkMap = new HashMap();

    let stringArr = string.split('');
    // console.log(stringArr);
    for (let i = 0; i < stringArr.length; i++) {
        checkMap.set(stringArr[i], stringArr[i]);
    }
    // console.log(checkMap);
    let newArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        let letter = stringArr[i];
        let hashCheck = checkMap.get(letter);
        console.log('letter', letter, 'hashCheck', hashCheck);
        if (hashCheck) {
            newArr.push(letter);
            checkMap.delete(letter);
        }
    }
    // console.log(newArr);
}

removeDuplicates('google');