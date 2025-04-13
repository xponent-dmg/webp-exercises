let hrs = document.querySelector(`#hrs`);
let min = document.querySelector(`#min`);
let sec = document.querySelector(`#sec`);
let ms = document.querySelector(`#ms`);
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    if (ms.textContent == "99") {
      ms.textContent = "00";
      sec.textContent = String(parseInt(sec.textContent) + 1).padStart(2, "0");
      if (sec.textContent == "59") {
        sec.textContent = "00";
        min.textContent = String(parseInt(min.textContent) + 1).padStart(
          2,
          "0"
        );
        if (min.textContent == "59") {
          min.textContent = "00";
          hrs.textContent = String(parseInt(hrs.textContent) + 1).padStart(
            2,
            "0"
          );
        }
      }
    } else {
      ms.textContent = String(parseInt(ms.textContent) + 1).padStart(2, "0");
    }
  }, 10);
}

function stopTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  clearInterval(timerId);
  hrs.textContent = "00";
  min.textContent = "00";
  sec.textContent = "00";
  ms.textContent = "00";
}

const start = document.querySelector(`#start-btn`);
start.onclick = startTimer;

document.querySelector(`#stop-btn`).onclick = stopTimer;
document.querySelector(`#reset-btn`).onclick = resetTimer;
