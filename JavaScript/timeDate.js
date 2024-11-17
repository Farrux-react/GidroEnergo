// TIME
function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.querySelector('#date').textContent = date;
    document.querySelector('#time').textContent = time;
}

setInterval(updateTime, 1000);