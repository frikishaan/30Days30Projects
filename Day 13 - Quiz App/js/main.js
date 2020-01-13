const url =
  "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=boolean";

// Declaring variables
let questions = [],
  current_question = 0,
  current_answer = true,
  score = 0;

//  Declaring UI Elements
const questionElem = document.querySelector(".question"),
  quiz = document.querySelector(".quiz"),
  result = document.querySelector(".result"),
  scoreElem = document.querySelector(".score"),
  trueBtn = document.querySelector(".true"),
  falseBtn = document.querySelector(".false"),
  right = document.querySelector(".right"),
  wrong = document.querySelector(".wrong"),
  restart = document.querySelector(".restart"),
  body = document.getElementsByTagName("body")[0];

//  Getting Questions from API
function fetchQuestions() {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      questions = res.results;
      showQuestion();
    })
    .catch(err => console.error(err));
}

// Display Quetion
function showQuestion() {
  console.log(questions[current_question]);

  // Display question
  questionElem.innerHTML = questions[current_question].question;

  // Saving Current correct answer in a global variable
  current_answer = questions[current_question].correct_answer;

  //  Enable buttons
  trueBtn.disabled = false;
  falseBtn.disabled = false;
}

// Check Answer
function checkAnswer(answer) {
  console.log(answer == current_answer);

  //  Disable buttons
  trueBtn.disabled = true;
  falseBtn.disabled = true;

  if (answer === current_answer) {
    body.style.backgroundColor = "#2ecc71";
    right.style.display = "block";
    score++;
  } else {
    body.style.backgroundColor = "#e74c3c";
    wrong.style.display = "block";
  }

  scoreElem.innerHTML = `Score : ${score}`;

  setTimeout(() => {
    body.style.backgroundColor = "#ecf0f1";
    current_question++;
    right.style.display = "none";
    wrong.style.display = "none";

    if (current_question > 4) {
      // Show Result
      showResult();
    } else {
      // Next Question
      showQuestion();
    }
  }, 2000);
}

// Show Result
function showResult() {
  quiz.style.display = "none";
  result.style.display = "block";
  restart.style.display = "block";

  // Display Remark
  if (score >= 4) {
    result.innerHTML = `Congrats!🎉 You got ${score} out of 5`;
    body.style.backgroundColor = "#2ecc71";
  } else if (score <= 3) {
    result.innerHTML = `Sorry😐, You got only ${score} out of 5`;
    body.style.backgroundColor = "#e74c3c";
  }

  setTimeout(() => {
    body.style.backgroundColor = "#ecf0f1";
  }, 5000);
}

trueBtn.addEventListener("click", () => {
  checkAnswer("True");
});
falseBtn.addEventListener("click", () => {
  checkAnswer("False");
});

restart.addEventListener("click", () => {
  // Reset varaibles and states
  score = 0;
  current_question = 0;
  result.style.display = "none";
  restart.style.display = "none";
  quiz.style.display = "block";
  questionElem.innerHTML = "Loading Questions...";
  scoreElem.innerHTML = "Score : 0";
  fetchQuestions();
});

fetchQuestions();
