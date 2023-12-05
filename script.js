(function () {
  let hour = document.querySelector(".hour");

  let min = document.querySelector(".minute");
  let sec = document.querySelector(".second");

  let startBtn = document.querySelector(".start");
  let stopBtn = document.querySelector(".stop");
  let resetBtn = document.querySelector(".reset");

  let countDownTimer = null;

  startBtn.addEventListener("click", function () {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      return;
    }

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countDownTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startInterval();
  });

  function stopInterval() {}

  function timer() {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    }
  }

  stopBtn.addEventListener("click", function () {
    stopBtn.style.display = "none";
    startBtn.style.display = "block";
  });
})();
