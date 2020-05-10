let wordLengthElement = document.getElementById("wordLengthElement");
let letterPositionsElement = document.getElementById("knownLetterAndPosition");
function getLength() {
    let value = wordLengthElement.value;
    return value
};

function getCharData() {
    let input = letterPositionsElement.value;
    let wordLength = getLength();
    let re = /[a-z]/i
    let charData = [];

    for (let i = 0; i < wordLength; i++) {
        if (re.test(input.charAt(i))) {
            let data = {
                char: input.charAt(i),
                pos: i
            }
            charData.push(data)
        }
    }
    return charData;
}

function makeRegexp() {
    let charData = getCharData();
    let re = [];
    let str = [];
    let wordLength = getLength();
    for (let i = 0; i < charData.length; i++) {
        str.push('')
        for (let j = 0; j < wordLength; j++) {
            if (j == charData[i].pos) {
                str[i] += charData[i].char
            }
            else {
                str[i] += '.'
            }
        }
        re.push(new RegExp(str[i]))
    }
    return re;
}

function getExcludedLetters() {
    let exculudedElement = document.getElementById('excluded')
    let excluded = exculudedElement.value.split(/,\s?\s?/)
    let exRegEx
    if (excluded != "") {
        exRegEx = []
        for (let i = 0; i < excluded.length; i++) {
            exRegEx.push(new RegExp(excluded[i]))
        }
    }
    else {
        exRegEx = []
    }
    return exRegEx;
    
}

function checkMatch(re, word, excluded) {
    let test = excluded;
    //console.log(excluded)


    let regChecks = re.length;
    let excludedChecks = excluded.length;
    let checksPassed = 0;
    let excludedPassed = 0;
    for (let i = 0; i < re.length; i++) {
        if (re[i].test(word)) {
            checksPassed++;
        }
    }
    for (let i = 0; i < excluded.length; i++) {
        if (excluded[i].test(word) == false) {
            excludedPassed++
        }
    }
    if (checksPassed == regChecks && excludedPassed == excludedChecks) {
        return true;
    }
    else {
        return false;
    }
}