function alphabetTester(inputArr) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let letterClasses = []
    let totalWords = inputArr.length
    class Letter {
        constructor(letter) {
            this._letter = letter;
            this._num = 0;
            this._percent = 0;
            this._re = / /
        }
        get re() {
            return this._re;
        }
        set re(reg) {
            this._re = reg
        }
        get percent() {
            return this._percent
        }
        set percent(percent) {
            this._percent = percent;
        }
        get letter() {
            return this._letter
        }
        get num() {
            return this._num
        }
        set num(number) {
            this._num = number;
        }
    }
    let timesPassed = 0;
    for (let i = 0; i < alphabet.length; i++) {
        timesPassed = 0;
        letterClasses.push(new Letter(alphabet[i]))
        letterClasses[i].re = new RegExp(letterClasses[i].letter)

        for (let j = 0; j < totalWords; j++) {
            if (letterClasses[i].re.test(inputArr[j])) {
                timesPassed++;
            }
        }
        letterClasses[i].num = timesPassed;
        letterClasses[i].percent = letterClasses[i].num * 100 / totalWords;
    }
    return letterClasses;
}

function myFunction() {
    console.log('test')
}