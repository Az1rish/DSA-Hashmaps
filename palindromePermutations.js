const HashMap = require('./hashMap');

function isAPalindromePermutation(string) {
    let stringArr = string.split(' ');
    string = stringArr.join('');
    stringArr = string.split('');
    let checkerHashmap = new HashMap();
    // place letters from string into hashmap and remove from array when they are added
    for (let i = 0; i < stringArr.length; i++) {
        let letter = stringArr[i];
        let hashIndex = checkerHashmap._findSlot(letter);
        let checkLetter = checkerHashmap._hashTable[hashIndex];
        
        if (!checkLetter) {
            checkerHashmap.set(letter, letter);
            stringArr.splice(i, 1);
            i--;
        }
    }
    // now you have a new array of the duplicated letters, remove them from the hashmap and then check length of hashmap. If original string was even in length and hashmap now has a length of zero it's a palindrome, if original length was odd and hashmap is now a length of 1, it's a palindrome, otherwise it's not
    for (let i = 0; i < stringArr.length; i++) {
        let letter = stringArr[i];
        let hashIndex = checkerHashmap._findSlot(letter);
        let checkLetter = checkerHashmap._hashTable[hashIndex];
        if (checkLetter) {
            checkerHashmap.delete(letter);
        }
    }
    if ((string.length % 2 === 0 && checkerHashmap.length === 0) || (string.length % 2 === 1 && checkerHashmap.length === 1)) {
        return true;
    }
    return false;
}

console.log(isAPalindromePermutation('acecarr'));            // true
console.log(isAPalindromePermutation('north'));              // false
console.log(isAPalindromePermutation('civic'));              // true
console.log(isAPalindromePermutation('iqrwhfowgn'));         // false
console.log(isAPalindromePermutation('no lemon no melon'));  // true