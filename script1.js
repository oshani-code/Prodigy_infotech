
let startTime = 0;
let intervalId;

function updateStopwatch() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
    const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(elapsedTime.getUTCMilliseconds()).padStart(3, '0');
    document.querySelector('.stopwatch').textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function startStopwatch() {
    if (!intervalId) {
        startTime = new Date().getTime();
        intervalId = setInterval(updateStopwatch, 10);
    }
}

function stopStopwatch() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
function resetStopwatch() {
    stopStopwatch();
    startTime = 0;
    document.querySelector('.stopwatch').textContent = '0:00:00:000';
}