// --- جديد: الجزء الخاص باحتفالية البالونات ---
function createBalloon() {
    const container = document.getElementById('balloon-container');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // ألوان بينك وبنفسجي وذهبي (زي الصورة)
    const colors = ['#ff4d6d', '#C026D3', '#E879F9', '#D946EF', '#FFD700'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.boxShadow = `0 0 10px ${balloon.style.backgroundColor}`;

    // مكان عشوائي (من اليسار لليمين) وحجم عشوائي
    balloon.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 20 + 20 + 'px'; // بين 20px و 40px
    balloon.style.width = size;
    balloon.style.height = (parseFloat(size) * 1.33) + 'px'; // الحفاظ على التناسب

    // سرعة عشوائية بسيطة (بين 3 و 5 ثواني)
    balloon.style.animationDuration = Math.random() * 2 + 3 + 's';

    container.appendChild(balloon);

    // مسح البالونة بعد الانتهاء عشان متتقلش الصفحة
    setTimeout(() => { balloon.remove(); }, 5000);
}

function startCelebration() {
    const container = document.getElementById('balloon-container');
    container.classList.add('show');

    // إنشاء بالونات بسرعة لفترة قصيرة
    let count = 0;
    const interval = setInterval(() => {
        if (count > 50) { // عدد البالونات
            clearInterval(interval);
        } else {
            createBalloon();
            count++;
        }
    }, 100); // بالونة كل 100 مللي ثانية

    // إيقاف الاحتفالية بعد 5 ثواني
    setTimeout(() => {
        container.classList.remove('show');
        // مسح أي بالونات متبقية
        container.innerHTML = '';
    }, 5000);
}

// --- كود الـ Tic-Tac-Toe المحدث ---
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
            // جديد: تشغيل الاحتفالية فوراً عند اكتشاف الفائز
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
    startCelebration(); // ضيفي السطر ده هنا
}
}

function resetGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(c => { c.innerText = ""; c.style.color = "white"; });
    document.getElementById('status').innerText = "";
    currentPlayer = 'X';
    // التأكد من إيقاف الاحتفالية ومسح الحاوية عند الرست
    document.getElementById('balloon-container').classList.remove('show');
    document.getElementById('balloon-container').innerHTML = '';
}