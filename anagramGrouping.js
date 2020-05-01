const HashMap = require('./hashMap');

function anagramGrouping(arr) {
    let testHash = new HashMap();
    let container = [];
    if (arr.length < 2) {
        return arr;
    }
    // split strings in array into individual letters
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
    }
    // create function to check if each array of letters contains same letters
    function wordChecker(arr, iteration) {
        // take first array of letters and create hashmap
        let first = arr[0];
        for (let i = 0; i < first.length; i++) {
            testHash.set(first[i], first[i]);
        }
        // join that group and place into container in it's own new array
        container.push([arr.shift().join('')]);
        // compare each letter from each array with what's in the hashmap
        top: for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                let letter = arr[i][j];
                let index = testHash._findSlot(letter);
                let checkHash = testHash._hashTable[index];
                // if a letter isn't in hashmap, jump out of loop, that array isn't an anagram with the word in the container
                if (!checkHash) {
                    continue top;
                }
            } 
            let newWord = arr.splice(i, 1);
            // join the letters that worked and push into same array as the original word
            container[iteration].push(newWord[0].join(''));
            i--;
        }
        // clear out hashmap for the next round
        testHash = new HashMap();
    }
    // keep performing that function while there are still groupings that haven't passed the hashmap test yet
    for (let i = 0; i <= arr.length; i++) {
        wordChecker(arr, i);
    }
    // return array of arrays grouped by anagrams
    return container;
}

console.log(anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

console.log(anagramGrouping(['abcd', 'defg', 'shane', 'dbca', 'gfed', 'eshna']));