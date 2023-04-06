let questions = JSON.parse(sessionStorage.getItem("storedAnswers"));
function renderAnswers() {
  let table = document.getElementById("resulttable");
  table.style = "display: inline";

  // Loop through each item in the array
  for (let i = 0; i < questions.length; i++) {
    let item = questions[i];

    // Create a new row for each item
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    table.appendChild(tr);
    tr.appendChild(th1);
    th1.textContent = `${i+1}`;
    tr.appendChild(th2);
    th2.textContent = `${item.question}`;
    tr.appendChild(th3);
    th3.textContent = `${item.userAnswer}`;
    tr.appendChild(td1);
    td1.textContent = `${item.correctAnswer}`;
    tr.appendChild(td2);
    td2.textContent = `${item.userAnswer}`;
    td2.style.color = item.userAnswer === item.correctAnswer ? "green" : "red"; // Highlight the user's answer in green if it's correct, and red if it's incorrect
    tr.appendChild(td3);
    td3.textContent = `${item.correctAnswer}`;
  }
}


let button = document.getElementById("submit");
button.addEventListener("click", (event) => {
  event.preventDefault();
  renderAnswers();
});

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