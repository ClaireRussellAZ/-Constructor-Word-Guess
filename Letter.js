class Letter {
    constructor(character){
        this.character = character;
        this.guessed = false;
    }

    
    guessLetter() {
        if (this.guessed) {
            return this.character;
        } else {
            return '*';
        }
    }

    
    checkGuess(letter) {
        if (this.character === letter) this.guessed = true;
    }
}

module.exports = Letter;
