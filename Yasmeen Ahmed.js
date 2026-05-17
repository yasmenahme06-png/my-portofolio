// 1. Contact Cloud
    const contactBtn = document.getElementById('contactBtn');
    const contactCloud = document.getElementById('contactCloud');
    contactBtn.addEventListener('click', (e) => { e.stopPropagation(); contactCloud.classList.toggle('show'); });
    document.addEventListener('click', (e) => { if (!contactCloud.contains(e.target)) contactCloud.classList.remove('show'); });

    // 2. To-Do List
    function addTodo() {
        const input = document.getElementById('todoInput');
        const list = document.getElementById('todoList');
        if (input.value.trim() === ''// 1. Contact Cloud
    const contactBtn = document.getElementById('contactBtn');
    const contactCloud = document.getElementById('contactCloud');
    contactBtn.addEventListener('click', (e) => { e.stopPropagation(); contactCloud.classList.toggle('show'); });
    document.addEventListener('click', (e) => { if (!contactCloud.contains(e.target)) contactCloud.classList.remove('show'); });

    // 2. To-Do List
    function addTodo() {
        const input = document.getElementById('todoInput');
        const list = document.getElementById('todoList');
        if (input.value.trim() === '') return;
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" onchange="this.parentElement.classList.toggle('completed')">
            <span style="flex-grow:1">${input.value}</span>
            <i class="fas fa-trash" onclick="this.parentElement.remove()" style="cursor:pointer; color:var(--pink)"></i>
        `;
        list.appendChild(li);
        input.value = '';
    }
    document.getElementById('todoInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') addTodo(); });

    // 3. Clock
    function updateClock() {
        const now = new Date();
        document.getElementById('clock').innerText = now.toLocaleTimeString('en-US', { hour12: true });
        document.getElementById('date').innerText = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    setInterval(updateClock, 1000); updateClock();

    // 4. Tic Tac Toe Logic
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
                startCelebration(); // <--- نداء وظيفة البلالين
            }
            else if (!gameState.includes("")) document.getElementById('status').innerText = "Draw!";
            else currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
    });

    function checkWinner() {
        const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return wins.some(p => gameState[p[0]] && gameState[p[0]] === gameState[p[1]] && gameState[p[0]] === gameState[p[2]]);
    }

    function resetGame() {
        gameState = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(c => c.innerText = "");
        document.getElementById('status').innerText = "";
        currentPlayer = 'X';
    }

    // --- وظيفة الاحتفال بالبلالين ---
    function startCelebration() {
        const container = document.getElementById('balloon-container');
        for(let i=0; i<30; i++) {
            setTimeout(() => {
                const b = document.createElement('div');
                b.className = 'balloon';
                b.style.left = Math.random() * 100 + '%';
                b.style.backgroundColor = ['#ff4d6d', '#ffd700', '#c026d3', '#4ade80'][Math.floor(Math.random()*4)];
                container.appendChild(b);
                setTimeout(() => b.remove(), 4000);
            }, i * 150);
        }
    }) return;
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" onchange="this.parentElement.classList.toggle('completed')">
            <span style="flex-grow:1">${input.value}</span>
            <i class="fas fa-trash" onclick="this.parentElement.remove()" style="cursor:pointer; color:var(--pink)"></i>
        `;
        list.appendChild(li);
        input.value = '';
    }
    document.getElementById('todoInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') addTodo(); });

    // 3. Clock
    function updateClock() {
        const now = new Date();
        document.getElementById('clock').innerText = now.toLocaleTimeString('en-US', { hour12: true });
        document.getElementById('date').innerText = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    setInterval(updateClock, 1000); updateClock();

    // 4. Tic Tac Toe Logic
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
                startCelebration(); // <--- نداء وظيفة البلالين
            }
            else if (!gameState.includes("")) document.getElementById('status').innerText = "Draw!";
            else currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
    });

    function checkWinner() {
        const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return wins.some(p => gameState[p[0]] && gameState[p[0]] === gameState[p[1]] && gameState[p[0]] === gameState[p[2]]);
    }

    function resetGame() {
        gameState = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(c => c.innerText = "");
        document.getElementById('status').innerText = "";
        currentPlayer = 'X';
    }

    // --- وظيفة الاحتفال بالبلالين ---
    function startCelebration() {
        const container = document.getElementById('balloon-container');
        for(let i=0; i<30; i++) {
            setTimeout(() => {
                const b = document.createElement('div');
                b.className = 'balloon';
                b.style.left = Math.random() * 100 + '%';
                b.style.backgroundColor = ['#ff4d6d', '#ffd700', '#c026d3', '#4ade80'][Math.floor(Math.random()*4)];
                container.appendChild(b);
                setTimeout(() => b.remove(), 4000);
            }, i * 150);
        }
    }
