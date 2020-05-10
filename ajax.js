let letterListElement;
window.onload = function() {
    letterListElement = document.getElementById('letterlist')
}

function sendWords(info, id) {
    document.getElementById(id).innerHTML = info;
}

function processWords(wordString) {
    let processedWords = wordString.split(/\r?\n/)
    return processedWords;
}

function getWords() {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            let wordList = processWords(xml.responseText);
            let newWordList = [];
            let length = getLength();
            let re = makeRegexp();
            let excluded = getExcludedLetters();
            for (let i = 0; i < wordList.length; i++) {
                if (wordList[i].length == length && checkMatch(re, wordList[i], excluded)) {
                    newWordList.push(wordList[i]);
                };
            };

            let letterData = alphabetTester(newWordList);
            makeTable(letterData)

            sendWords(newWordList, 'output')
        };
    };
    xml.open("GET", "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt", true);
    xml.send();
}