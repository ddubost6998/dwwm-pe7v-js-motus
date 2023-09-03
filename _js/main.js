function getPlayerName() {
    const playerName = prompt("Entrez votre nom :");
    return playerName;
}

const wordList = ["abricot", "banana", "citron", "danseur", "éclair", "farine", "girafe", "héros", "insigne", "jouets"];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function checkGuess(word, guess) {
    const result = { wellplaced: 0, misplaced: 0 };
    const usedIndexes = [];

    let i = 0;
    while (i < word.length) {
        if (word[i] === guess[i]) {
            result.wellplaced++;
            usedIndexes.push(i);
        }
        i++;
    }

    i = 0;
    while (i < word.length) {
        if (usedIndexes.includes(i)) {
            i++;
            continue;
        }

        let j = 0;
        let found = false;
        while (j < word.length && !found) {
            if (!usedIndexes.includes(j) && word[i] === guess[j]) {
                result.misplaced++;
                usedIndexes.push(j);
                found = true;
            }
            j++;
        }
        i++;
    }

    return result;
}

function playGame(playerName) {
    const maxAttempts = 10;
    let attempts = 0;
    const secretWord = getRandomWord();

    alert(`C'est parti ${playerName} ! Le mot secret a 6 lettres. Commencez à deviner.`);

    const guessForm = document.getElementById("guess-form");
    guessForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const guessInput = document.getElementById("guess-input").value.toLowerCase();

        if (attempts >= maxAttempts) {
            alert(`Désolé, ${playerName}. Vous avez atteint le nombre maximum de tentatives. Le mot secret était "${secretWord}".`);
            guessForm.removeEventListener("submit");
        } else if (guessInput.length !== 6) {
            alert("Le mot doit contenir exactement 6 lettres.");
        } else {
            const result = checkGuess(secretWord, guessInput);
            updateGameBoard(result, guessInput);
            attempts++;

            if (result.wellplaced === 6) {
                alert(`Félicitations, ${playerName} ! Vous avez trouvé le mot secret "${secretWord}" en ${attempts} tentatives.`);
                guessForm.removeEventListener("submit");
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', function () {
    const playerName = getPlayerName();
    if (playerName) {
        playGame(playerName);
    } else {
        alert("Nom invalide. Rafraîchissez la page et entrez un nom valide.");
    }
});