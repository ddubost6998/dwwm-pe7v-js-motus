# Jeux motus DUBOST Damien

Dans ce projet je vais utiliser le format camelCase.

getPlayerName(): Cette fonction demande au joueur d'entrer son nom à l'aide d'une boîte de dialogue prompt. Le nom est ensuite renvoyé en tant que résultat.

getRandomWord(): Cette fonction sélectionne aléatoirement un mot de la liste wordList et le renvoie comme le mot secret à deviner.

checkGuess(word, guess): Cette fonction compare le mot secret word avec le mot proposé par le joueur guess. Elle compte le nombre de lettres bien placées (wellplaced) et le nombre de lettres mal placées (misplaced) et renvoie ces valeurs sous la forme d'un objet.

updateGameBoard(result, guess): Cette fonction met à jour le tableau de jeu en affichant le mot proposé par le joueur guess dans les cases du tableau. Elle ajoute également des classes CSS aux cases pour indiquer si les lettres sont bien placées ou mal placées.

askToPlayAgain(): Cette fonction affiche une boîte de dialogue demandant au joueur s'il souhaite rejouer. Si le joueur choisit de rejouer, la page est rechargée pour recommencer le jeu.

playGame(playerName): Cette fonction coordonne le déroulement du jeu. Elle initialise le jeu en choisissant un mot secret, en affichant la première lettre dans le plateau de jeu, et en informant le joueur du nombre maximum de tentatives. Elle gère également la soumission du formulaire et met à jour le plateau de jeu en fonction des réponses du joueur. Lorsque le joueur a trouvé le mot ou a épuisé toutes les tentatives, cette fonction utilise askToPlayAgain() pour demander au joueur s'il souhaite rejouer. Si le joueur choisit de rejouer, la page est rechargée.

Le gestionnaire d'événements DOMContentLoaded initialise le jeu lorsque la page est entièrement chargée. Il demande d'abord le nom du joueur avec getPlayerName(), puis commence le jeu avec playGame(playerName) si un nom valide est fourni.