
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]') ;

let intervalId;

startBtn.addEventListener('click', startChangeColor)
stopBtn.addEventListener('click', stopChangeColor)

function startChangeColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false

    intervalId = setInterval(function () {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    

}

function stopChangeColor() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


