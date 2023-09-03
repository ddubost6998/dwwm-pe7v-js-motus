function getPlayerName() {
    const playerName = prompt("Entrez votre nom :");
    return playerName;
}

const wordList = ["abricot", "banana", "citron", "danseur", "éclair", "farine", "girafe", "héros", "insigne", "jouets"];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

window.addEventListener('DOMContentLoaded', function () {
    const playerName = getPlayerName();
    if (playerName) {
        alert(`C'est parti ${playerName} !`);
        // Vous pouvez ajouter ici le reste du code de votre jeu
    } else {
        alert("Nom invalide. Rafraîchissez la page et entrez un nom valide.");
    }
});