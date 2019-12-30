const advice = document.querySelector(".advice");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(res => {
      advice.innerHTML = res.slip.advice;
    })
    .catch(err => console.error(err));
}

document.getElementById("get-advice").addEventListener("click", getAdvice);

getAdvice();
