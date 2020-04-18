const Letter = require('./Letter.js');

class Word {
    constructor(wordToGuess){
        this.wordToGuess = wordToGuess;
        this.lettersInWord = [];
    }
    
    populate() {
        let wordArr = this.wordToGuess.split('');
        for (let i=0; i < wordArr.length; i++) {
            let letter = new Letter(wordArr[i]);
            this.lettersInWord.push(letter);
        }
    }

    testLetter(char) {
        this.lettersInWord.map(character => character.checkGuess(char));
        this.toString();
    }

    toString() {
        let string = '';
        this.lettersInWord.map(character => string += character.guessLetter());
        console.log(string);
        return string;
    }
}

module.exports = Word;
