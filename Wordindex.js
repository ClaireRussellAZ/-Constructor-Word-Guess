const inquirer = require ('inquirer');
const Word = require('./Word');

const gameWords = ['afghan Hound','airedale terrier','akita','basenji','basset hound','beagle','boxer','border collie','catahoula leopard dog','chihuahua','chow chow','corgi','dachshund','dalmation','doberman','english setter','french bulldog','fox terrier','german shepherd','golden retriver','jack russell terrier','kommodore','king charles spaniel','labrador','lhaso apso','maltese','mudi','malamute','newfoundland','old english sheepdog','poodle','papillion','pomeranien','rhodesien ridgeback','rough collie','rat terrier','redbone coonhound','saluki','shar pei','siberian husky','shiba inu','saint bernard','springer spaniel','swedish vallhund','tibetan terrier','vizsla','weimaraner','whippet'];

let guessesLeft;
let wordToGuess;
let word;

function playGame(){
    guessesLeft = 15;
    wordToGuess = gameWords[Math.floor(Math.random() * 48)];
    word = new Word(wordToGuess);
    word.populate();
    console.log('This is Word Guess! Today\'s guess is...dog breeds! Here\'s your word:');
    word.toString();
    console.log(`You have ${guessesLeft} guesses remaining.`);
    guess();
}

function guess() {
    inquirer
    .prompt(
        {
            name: 'guess',
            message: 'Your guess:'
        }
    ).then(reply => {

        if (reply.guess.length > 1) {
            console.log('Please guess one letter at a time.');
            guess();
        } else {
            let userGuess = reply.guess;
            word.testLetter(userGuess); 
            guessesLeft--; 
            console.log(`You have ${guessesLeft} guesses remaining.`); 
            updateGuessedArr(); 
        }     
    });
}


function updateGuessedArr() {
    let guessed = [];
    word.lettersInWord.map(letter => guessed.push(letter.guessed));

    if (guessed.includes(false) && guessesLeft > 0) {
        guess();
 
    } else if (guessed.includes(false) && guessesLeft === 0) {
        console.log(`You lost.\n The word was ${wordToGuess}.`);
        playAgain();

    } else if (!guessed.includes(false)) {
        console.log('You won!');
        playAgain();
    }
}

function playAgain(){
    inquirer
    .prompt(
        {
            name: 'playAgain',
            message: 'Play again?',
            type: 'confirm',
            default: true
        }
    ).then(reply => {
        if (reply.playAgain) playGame();
        else console.log('play agin sometime!');
    });
}

playGame(); 
