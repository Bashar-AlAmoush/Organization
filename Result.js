let questions = JSON.parse(sessionStorage.getItem("storedAnswers"));
const userInfo = JSON.parse(localStorage.getItem("users"));

// use this to render the name and the postion of the user

function getExamTypeFromLocalStorage() {
  const userData = JSON.parse(localStorage.getItem("users"));
  const position = userData[0].position;

  let examType;
  switch (position) {
    case "2":
      examType = HTML;
      break;
    case "3":
      examType = CSS;
      break;
    case "4":
      examType = JS;
      break;
    default:
      console.log("Invalid position value.");
  }

  return examType;
}
const examType = getExamTypeFromLocalStorage();
function result() {
  const userName = userInfo[0].username;

  let quizInfo = document.getElementById("quizInfo");
  let username = document.createElement("h4");
  let Result = document.createElement("h5");
  let examtype = document.createElement("h5");
  let Score = document.createElement("h6");
  let message = document.createElement("p");
  let passOrfail = document.createElement("h4");
  quizInfo.appendChild(username);
  username.textContent = ` ${userName} `;
  quizInfo.appendChild(examtype);
  examtype.textContent = ` ${examType} `;

  quizInfo.appendChild(Result);
  Result.textContent = `Result`;
  quizInfo.appendChild(Score);
  Result.textContent = `Score : ${correctAnswers}/10`;
  quizInfo.appendChild(message);
  message.textContent = correctAnswers >= 5 ? `Good Job!` : `Hard Luck :( `;
  quizInfo.appendChild(passOrfail);
  passOrfail.textContent = correctAnswers >= 5 ? `Pass` : `Fail`;
  passOrfail.style.backgroundColor = correctAnswers >= 5 ? `green` : `red`;
  passOrfail.style.padding = `8px 10px 8px 10px`;
  passOrfail.style.borderRadius = `5px`;
  quizInfo.style.backgroundColor = "rgb(40, 42, 53)";
  quizInfo.style.color = "white";
  quizInfo.style.width = "40%";
  quizInfo.style.margin = "7rem auto 0px";
  quizInfo.style.padding = "3rem";
  quizInfo.style.borderRadius = "10px";
  quizInfo.style.display = "flex";
  quizInfo.style.flexDirection = "column";
  quizInfo.style.alignItems = "center";
}
window.addEventListener("load", result);

function renderAnswers() {
  let table = document.getElementById("resulttable");
  table.style = "display: none";

  // Loop through each item in the array
  for (let i = 0; i < questions.length; i++) {
    let item = questions[i];

    // Create a new row for each item
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    table.appendChild(tr);
    tr.appendChild(td1);
    td1.textContent = `${i + 1}`;
    tr.appendChild(td2);
    td2.textContent = `${item.question}`;
    tr.appendChild(td3);
    td3.textContent = `${item.userAnswer}`;
    td3.style.color =
      item.userAnswer === item.correctAnswer
        ? "rgb(71,142,141)"
        : "	rgb(136, 8, 8)"; // Highlight the user's answer in green if it's correct, and red if it's incorrect

    tr.appendChild(td4);
    td4.textContent = `${item.correctAnswer}`;
    tr.style.backgroundColor = `white`;
    table.style.margin = "6rem auto";
  }
}
renderAnswers();

let button = document.getElementById("submit");
let toggle = false;

function handleButtonClick(event) {
  event.preventDefault();
  let table1 = document.getElementById("resulttable");

  toggle = !toggle;
  if (toggle) {
    table1.style.display = "block";
    button.textContent = `Hide Answers`;
  } else {
    table1.style.display = "none";
    button.textContent = `Show Answers`;
  }
}

button.addEventListener("click", handleButtonClick);

let correctAnswers = 0;
let incorrectAnswers = 0;

questions.forEach((arr) => {
  if (arr.userAnswer === arr.correctAnswer) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }
});

console.log(`Correct answers: ${correctAnswers}`);
console.log(`Incorrect answers: ${incorrectAnswers}`);
