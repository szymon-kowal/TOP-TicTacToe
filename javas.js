const game = (() => {
    let gameBoard = ['','','','','','','','','']

    const gameState = () => {
        // Takes the current state of game
        let board = document.querySelector('.board');
        let elements = board.querySelectorAll('.field')
        
        console.log(elements);
    }
    const restart = () => {
        const _reset = document.querySelector('.restart');
        _reset.addEventListener('click',function() {
            for (element in gameboard) {
                element = '';
            }
        });
    }
    //console.log(restart())
    gameState()
})();

