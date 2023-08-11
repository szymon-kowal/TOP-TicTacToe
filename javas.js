const game = (() => {
    let gameBoard = ['','','','','','','','','']
    let currentPlayerSymbol = 'X'
    let numberOfTurns = 0;
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const board = document.querySelector('.board');
    const elements = board.querySelectorAll('.field');
    const displayPlayer = document.querySelector('.player');
    const reset = document.querySelector('.restart');

    

    const startGame = () => {
        for (let element of elements) {
            element.addEventListener('click', () => {
                if (element.textContent === '') {
                    element.textContent = currentPlayerSymbol;
                    gameState();
                    isGameEnd(currentPlayerSymbol);
                    currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X';
                    displayPlayer.textContent = currentPlayerSymbol;
                }
            });
        }
    }

    const gameState = () => {
        // Takes the current state of game and saves it in array
        for (let i = 0; i < elements.length; i++) {
            gameBoard[i] = elements[i].textContent;
        }

    }

    const checkWinner = (playerSymbol) => {
        for (const combination of winningCombinations) {
            const [a, b ,c] = combination;
            if (gameBoard[a] === playerSymbol && gameBoard[b] === playerSymbol && gameBoard[c] === playerSymbol) {
                return playerSymbol;
            }
        }
        return null;
    }

    // Restarts the game by removing elements from array and html
    
    

    const restart = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i] = '';
            elements[i].textContent = '';
            currentPlayerSymbol = 'X';
            displayPlayer.textContent = currentPlayerSymbol;
        }
        numberOfTurns = 0;
        gameState();
    };

    reset.addEventListener('click',restart)

    const isGameEnd = (playerSymbol) => {
        const winner = checkWinner(playerSymbol);
        if (winner) {
            setTimeout(() => {
                alert('Player ' + winner + ' won !');
                restart();
            }, 10);
            return;
        }
    }

    return {restart, startGame}
})();


game.startGame();

