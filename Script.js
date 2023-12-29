let timer;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = 
        padNumber(hours) + ":" + 
        padNumber(minutes) + ":" + 
        padNumber(remainingSeconds);

    document.getElementById("timer").textContent = formattedTime;
}

function padNumber(number) {
    return (number < 10) ? "0" + number : number;
}
