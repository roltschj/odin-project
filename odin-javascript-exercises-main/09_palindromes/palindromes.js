const palindromes = function (phrase) {
    // render phrase into single uninterrupted string of letters by 1) removing punctuation, changing to LC...
    let workingPhrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    // ...2) removing all spaces between words
    workingPhrase = workingPhrase.replace(/\s/g,"");

    // compare characters first-last, second-second to last, etc. If mismatch found, abort. If none found, is a palindrome
    for ( let i = 0; i < Math.floor(workingPhrase.length / 2); i++) {
        if ( workingPhrase[i] !== workingPhrase[workingPhrase.length - (i + 1) ] ) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
