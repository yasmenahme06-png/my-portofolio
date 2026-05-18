function createBalloon() {
    const container = document.getElementById('balloon-container');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const colors = ['#ff4d6d', '#C026D3', '#E879F9', '#D946EF', '#FFD700'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.boxShadow = `0 0 10px ${balloon.style.backgroundColor}`;

    balloon.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 20 + 20 + 'px'; 
    balloon.style.width = size;
    balloon.style.height = (parseFloat(size) * 1.33) + 'px';
    balloon.style.animationDuration = Math.random() * 2 + 3 + 's';

    container.appendChild(balloon);

    setTimeout(() => { balloon.remove(); }, 5000);
}

function startCelebration() {
    const container = document.getElementById('balloon-container');
    container.classList.add('show');

    let count = 0;
    const interval = setInterval(() => {
        if (count > 50) {ت
            clearInterval(interval);
        } else {
            createBalloon();
            count++;
        }
    }, 100); 

    setTimeout(() => {
        container.classList.remove('show');
        container.innerHTML = '';
    }, 5000);
}

let currentPlayer = 'X', gameState = ["", "", "", "", "", "", "", "", ""];
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        if (gameState[index] !== "" || checkWinner()) return;
        gameState[index] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? 'var(--pink)' : '#4ade80';
        
        if (checkWinner()) {
            document.getElementById('status').innerText = `Winner: ${currentPlayer}!`;
            startCelebration();
        } else if (!gameState.includes("")) {
            document.getElementById('status').innerText = "Draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

function checkWinner() {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return wins.some(p => gameState[p[0]] && gameState[p[0]] === gameState[p[1]] && gameState[p[0]] === gameState[p[2]]);
if (checkWinner()) {
    document.getElementById('status').innerText = "Winner! 👑";
    startCelebration(); 
}
}

function resetGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(c => { c.innerText = ""; c.style.color = "white"; });
    document.getElementById('status').innerText = "";
    currentPlayer = 'X';
    document.getElementById('balloon-container').classList.remove('show');
    document.getElementById('balloon-container').innerHTML = '';
}
