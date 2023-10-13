// Variables globales
var secretNumber;
var attemptsLeft;
var score;

// Fonction pour commencer une nouvelle partie
function startNewGame() {
    secretNumber = generateRandomNumber();
    attemptsLeft = 10;
    score = 0;
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = attemptsLeft;
    document.getElementById("score").innerHTML = score;
    document.getElementById("guessInput").value = "";
}

// Fonction pour générer un nombre aléatoire entre 0 et 1000
function generateRandomNumber() {
    return Math.floor(Math.random() * 1001);
}

// Fonction pour vérifier la devinette du joueur
function checkGuess() {
    var guess = parseInt(document.getElementById("guessInput").value);
    
    if (!isNaN(guess)) {
        attemptsLeft--;
        document.getElementById("attempts").innerHTML = attemptsLeft;

        if (guess === secretNumber) {
            document.getElementById("message").innerHTML = "Félicitations ! Vous avez deviné le nombre.";
            score += 1;
            document.getElementById("score").innerHTML = score;
            startNewGame(); 
            // Commencer une nouvelle partie
        } else if (attemptsLeft === 0) {
            document.getElementById("message").innerHTML = "Échec. Le nombre secret était : " + secretNumber;
            startNewGame(); 
            // Commencer une nouvelle partie
        } else if (guess < secretNumber) {
            document.getElementById("message").innerHTML = "Trop bas. Essayez à nouveau.";
        } else {
            document.getElementById("message").innerHTML = "Trop élevé. Essayez à nouveau.";
        }
    }
}



// Variables globales
var secretNumber;
var attemptsLeft;
var score;

// Fonction pour commencer une nouvelle partie
function startNewGame() {
    secretNumber = generateRandomNumber();
    attemptsLeft = 10;
    score = 0;
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = attemptsLeft;
    document.getElementById("score").innerHTML = score;
    document.getElementById("guessInput").value = "";
}

// Fonction pour générer un nombre aléatoire entre 0 et 1000
function generateRandomNumber() {
    return Math.floor(Math.random() * 1001);
}

// Fonction pour vérifier la devinette du joueur
function checkGuess() {
    var guess = parseInt(document.getElementById("guessInput").value);
    
    if (!isNaN(guess)) {
        attemptsLeft--;
        document.getElementById("attempts").innerHTML = attemptsLeft;

        if (guess === secretNumber) {
            document.getElementById("message").innerHTML = "Félicitations ! Vous avez deviné le nombre.";
            score += 1;
            document.getElementById("score").innerHTML = score;
            startNewGame(); 
            // Commencer une nouvelle partie
        } else if (attemptsLeft === 0) {
            document.getElementById("message").innerHTML = "Échec. Le nombre secret était : " + secretNumber;
            revealSecretNumber(); // Révéler le nombre secret
        } else if (guess < secretNumber) {
            document.getElementById("message").innerHTML = "Trop bas. Essayez à nouveau.";
        } else {
            document.getElementById("message").innerHTML = "Trop élevé. Essayez à nouveau.";
        }
    }
}

// Fonction pour révéler le nombre secret après les tentatives
function revealSecretNumber() {
    const secretNumberDisplay = document.getElementById("secretNumberDisplay");
    secretNumberDisplay.textContent = secretNumber;
    document.querySelector(".ball").classList.remove("revealed");
    document.querySelector(".ball").textContent = secretNumber;
    checkGameStatus();
}

// Démarrer la première partie
startNewGame();
