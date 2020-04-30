const HashMap = require('./hashMap');

function palindromePermutation(string) {
    let stringArr = string.split('');
    let checkerHashmap = new HashMap();
    console.log(stringArr);
    for (let i = 0; i < stringArr.length; i++) {
        let letter = stringArr[i];
        let checkLetter = checkerHashmap.get(letter);
        if (checkLetter.error) {
            checkerHashmap.delete(letter);
        } else {
            checkerHashmap.set(letter, letter);
        }
    }
    console.log(checkerHashmap);
}

palindromePermutation('acecarr');