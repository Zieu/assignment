const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const questions = [
  {
    question: "What is my main OS?",
    answers: {
      a: "Windows 10",
      b: "Mac OS",
      c: "Linux",
    },
    correctAnswer: "c",
  },
  {
    question: "What musical instrument i can play?",
    answers: {
      a: "Piano",
      b: "Guitar",
      c: "Nothing at all",
    },
    correctAnswer: "a",
  },
  {
    question: "Which Editor/IDE is my favourite",
    answers: {
      a: "WebStorm by JetBrains",
      b: "VS Code by Microsoft",
      c: "Atom by GitHub",
      d: "VIM!",
    },
    correctAnswer: "b",
  },
  {
    question: "What UI framework/library I use in a daily basis?",
    answers: {
      a: "Angular",
      b: "Svelte",
      c: "Vue",
      d: "React",
    },
    correctAnswer: "d",
  },
];

function buildQuiz() {
  const output = [];

  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

buildQuiz();

const showResults = () => {
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let numCorrect = 0;

  questions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainer.previousElementSibling.style.color = "green";
    } else {
      answerContainer.previousElementSibling.style.color = "red";
    }
  });

  let message = "";
  switch (numCorrect) {
    case 0:
      message =
        "Do not be sad, it is just a game. Next time it will be easier!";
      break;
    case 1:
      message = "I hope you are not dissapointed. You can try one more time.";
      break;
    case 2:
      message = "You know 50% of me, that is good!";
      break;
    case 3:
      message = "You almost know me, have not we met before?";
      break;
    case 4:
      message =
        "You are a  genius! You guessed all correct. I hope you did not cheat by looking at the source code :)";
      break;
    default:
      break;
  }
  resultsContainer.innerHTML = `You guessed ${numCorrect} out of ${questions.length}. <hr /> ${message}`;
};

submitButton.addEventListener("click", showResults);
