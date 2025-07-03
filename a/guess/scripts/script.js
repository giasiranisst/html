const hangmanImage = document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guess-text b");
const wordDisplay = document.querySelector(".word-display");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const sound = document.getElementById('failSound');

let currentWord, currentHint, orrectLetters, wrongGuessCount;
const totalWords = 6;
const maxGuesses = 8;
let word_id = 0
let mustguess = 0;

const resetGame = () => {
    correctLetters =[];
    wrongGuessCount = 0;

    wordDisplay.innerHTML = currentWord.split("").map((_, i) => 
        currentHint[i] === "0" 
            ? `<li class="letter"></li>` 
            : `<li class="noguess">${currentWord[i]}</li>`
    ).join("");
    gameModal.classList.remove("show");
    guessesText.innerText = `${wrongGuessCount} από ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled=false);
    hangmanImage.src = `img/dinosaur-${wrongGuessCount}.jpg`;
}

const getNextWord = () => {
    const {word, hint} = wordList[word_id];
    currentWord = word;
    
    currentHint = hint.split("");
    mustguess = hint.split("0").length-1;

    resetGame();
}

const gameOver = (isVictory, nextButton) => {
    setTimeout(() => {
        const modalText = isVictory ? `Βρήκες τη λέξη: <b>${currentWord}</b>` : ``;
        gameModal.querySelector("img").src = `img/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Μπράβο!' : 'Λυπάμαι, δεν βρήκες τη λέξη.'}`;
        gameModal.querySelector("p").innerHTML = `${modalText}`;
        gameModal.querySelector("button").innerText = `${nextButton ? 'ΕΠΟΜΕΝΗ ΛΕΞΗ' : 'ΑΠΟ ΤΗΝ ΑΡΧΗ'}`;
        gameModal.classList.add("show");
    }, 300);
}

const initGame = (button, clickedLetter) => {
    let noneHint_0 = true;

    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter && currentHint[index] === "0") {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                noneHint_0 = false;
            }
        });
    } 
    
    if (noneHint_0) {
            sound.currentTime = 0;
    sound.play();
        wrongGuessCount++;
        guessesText.innerText = `${wrongGuessCount} από ${maxGuesses}`;
        hangmanImage.src = `img/dinosaur-${wrongGuessCount}.jpg`;
    }
    button.disabled = true;

    if (wrongGuessCount === maxGuesses) return isLastWord(false);
    if (correctLetters.length === mustguess) return isLastWord(true);
}

const isLastWord = (won) => {
        word_id += 1;

        if (word_id == totalWords) {
            word_id = 0;
            return gameOver(won, false);
        }
        else
           return gameOver(won, true);
}

const letters = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("");
for (let i = 0; i < 24; i++) {
    const button = document.createElement("button");
    button.innerText = letters[i];
    keyboardDiv.appendChild(button);

    button.addEventListener("click", e => initGame(e.target, letters[i]));
}

getNextWord();

playAgainBtn.addEventListener("click", getNextWord);