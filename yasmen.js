function updateClock() {
    const clockEl = document.getElementById('clock');
    const dateEl = document.getElementById('date');
    const now = new Date();
    if(clockEl) clockEl.innerText = now.toLocaleTimeString('en-US', { hour12: true });
    if(dateEl) dateEl.innerText = now.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' });
}
setInterval(updateClock, 1000);
updateClock();

function addTodo() {
    const input = document.getElementById('task-input');
    const list = document.getElementById('todo-list');
    if(!input || !input.value.trim()) return;
    const li = document.createElement('li');
    li.className = 'todo-item';
li.innerHTML = `<input type="checkbox" onchange="this.parentElement.classList.toggle('completed')"> 
                <span style="flex-grow:1; margin-left:10px;">${input.value}</span>
                <i class="fas fa-trash" onclick="this.parentElement.remove()" style="cursor:pointer; color:#ff4d6d; margin-right:10px;"></i>`;       list.appendChild(li);
    input.value = '';
}

let currentPlayer = 'X', gameState = ["", "", "", "", "", "", "", "", ""];
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const idx = cell.getAttribute('data-index');
        if (gameState[idx] !== "" || checkWinner()) return;
        gameState[idx] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? '#ff4d6d' : '#4ade80';
        if (checkWinner()) {
            document.getElementById('status').innerText = `Winner: ${currentPlayer} 👑`;
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
    return wins.some(p => gameState[p[0]] !== "" && gameState[p[0]] === gameState[p[1]] && gameState[p[0]] === gameState[p[2]]);
}

function resetGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(c => c.innerText = "");
    document.getElementById('status').innerText = "";
    currentPlayer = 'X';
}

function startCelebration() {
    const container = document.getElementById('balloon-container');
    container.style.display = 'block'; 
    for(let i=0; i<40; i++) {
        setTimeout(() => {
            const b = document.createElement('div');
            b.className = 'balloon';
            b.style.left = Math.random() * 100 + '%';
            b.style.backgroundColor = ['#ff4d6d', '#ffd700', '#c026d3', '#4ade80'][Math.floor(Math.random()*4)];
            container.appendChild(b);
            setTimeout(() => b.remove(), 4000);
        }, i * 100);
    }
    setTimeout(() => container.style.display = 'none', 6000);
}