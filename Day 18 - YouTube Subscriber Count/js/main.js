let target = 0,
  i = 0;

const subs = document.querySelector(".subs");

window.onload = function() {
  fetch("https://stark-atoll-02558.herokuapp.com/florin-pop")
    .then(res => res.json())
    .then(subs => {
      target = subs.subs;
      incrementCounter();
    })
    .catch(err => console.error(err));
};

function incrementCounter() {
  if (i < target) {
    subs.innerHTML = i;
    i += 10;
    setTimeout(() => {
      incrementCounter();
    }, 1);
  } else {
    subs.innerHTML = target;
  }
}
