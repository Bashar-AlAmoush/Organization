let questions =[
  {
      "question": "What is a 'callback' in JavaScript?",
      "userAnswer": "A function that is called before another function",
      "correctAnswer": "A function that is passed as an argument to another function"
  },
  {
      "question": "What is the correct way to declare a variable in JavaScript?",
      "userAnswer": "myVariable var",
      "correctAnswer": "var myVariable"
  },
  {
      "question": "What is the output of the following code? var x = 5; console.log(x++);",
      "userAnswer": "Throws an error",
      "correctAnswer": "5"
  },
  {
      "question": "What is the result of the following expression: '5' + 3?",
      "userAnswer": "Error",
      "correctAnswer": "53"
  },
  {
      "question": "What is the difference between 'let' and 'var' in JavaScript?",
      "userAnswer": "'var' is a reserved keyword, while 'let' is not",
      "correctAnswer": "'let' has block scope, while 'var' has function scope"
  },
  {
      "question": "What is the difference between '==' and '===' in JavaScript?",
      "userAnswer": "Both '==' and '===' are used to assign values to variables",
      "correctAnswer": "'==' compares values only, while '===' compares both values and types"
  },
  {
      "question": "What is the result of the following expression? '2' + 2",
      "userAnswer": "TypeError",
      "correctAnswer": "22"
  },
  {
      "question": "What is the purpose of 'use strict' in JavaScript?",
      "userAnswer": "To allow the use of global variables in JavaScript",
      "correctAnswer": "To enable strict mode in JavaScript"
  },
  {
      "question": "What is the purpose of the 'typeof' operator in JavaScript?",
      "userAnswer": "To declare a new variable",
      "correctAnswer": "To determine the type of a variable"
  },
  {
      "question": "What is a 'closure' in JavaScript?",
      "userAnswer": "A function that is used to call another function",
      "correctAnswer": "A function that has access to variables in its outer scope"
  }
]

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