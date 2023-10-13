let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
let playerXScore = 0;
let playerOScore = 0;

function makeMove(index) {
    if (gameBoard[index] === '' && !gameOver) {
        gameBoard[index] = currentPlayer;
        const cell = document.getElementsByClassName('oncl')[index];
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());

        if (checkWin()) {
            document.getElementById('winner').innerText = `Le joueur ${currentPlayer} a gagné !`;
            document.getElementById('winner').classList.add('win');
            updateScore(currentPlayer);
            gameOver = true;
        } else if (!gameBoard.includes('')) {
            document.getElementById('status').innerText = "Match nul !";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Tour du joueur ${currentPlayer}`;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementsByClassName('oncl')[a].classList.add('win');
            document.getElementsByClassName('oncl')[b].classList.add('win');
            document.getElementsByClassName('oncl')[c].classList.add('win');
            return true;
        }
    }

    return false;
}

function updateScore(player) {
    if (player === 'X') {
        playerXScore++;
        document.getElementById('playerX-score').innerText = playerXScore;
    } else {
        playerOScore++;
        document.getElementById('playerO-score').innerText = playerOScore;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    const cells = document.getElementsByClassName('oncl');
    for (const cell of cells) {
        cell.innerText = '';
        cell.classList.remove('x', 'o', 'win');
    }

    document.getElementById('status').innerText = `Le jeu peut commencer ! Joueur X, c'est votre tour.`;
    document.getElementById('winner').innerText = '';
    document.getElementById('winner').classList.remove('win');
}

document.getElementById('status').innerText = `Le jeu peut commencer ! Joueur X, c'est votre tour.`;
