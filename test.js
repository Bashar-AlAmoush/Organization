import { JS } from './questions.js';
import { HTML } from './questions.js';
import { CSS } from './questions.js';
console.log(JS);
console.log(HTML);
console.log(CSS);

// function getExamTypeFromLocalStorage() {
//     const userData = JSON.parse(localStorage.getItem("users"));
//     const position = userData[0].position;
  
//     let examType;
//     switch (position) {
//       case "2":
//         examType = HTML;
//         break;
//       case "3":
//         examType = CSS;
//         break;
//       case "4":
//         examType = JS;
//         break;
//       default:
//         console.log("Invalid position value.");
//     }
  
//     return examType;
//   }
  const exam = JS;
  
let currentQuestion = 0;
// display the qustion from the array 

function displayQuestion() {
    let question = exam[currentQuestion];
    document.getElementById("question-text").innerHTML = question.question;
    document.getElementById("option1").nextSibling.textContent = question.optionA;
    document.getElementById("option2").nextSibling.textContent = question.optionB;
    document.getElementById("option3").nextSibling.textContent = question.optionC;
    document.getElementById("option4").nextSibling.textContent = question.optionD;
    document.getElementById("next-button").disabled = true;

    document.getElementsByName("radio").forEach(option => {
        option.checked = false;

        option.addEventListener("change", function() {
            document.getElementById("next-button").disabled = false;
        });
    });

    document.getElementById("question-count").textContent = `Question ${currentQuestion + 1} of ${exam.length}`;
}
displayQuestion();
  // Timer 
 let quizTime = 8 * 60; // 8 minutes in seconds
 let intervalId = null;
 
 function startQuiz() {
   displayQuestion();
   intervalId = setInterval(decrementTime, 1000);
 }
 
 function decrementTime() {
   quizTime--;
   updateTimer();
 
   if (quizTime <= 0) {
     clearInterval(intervalId);
     moveToNextQuestion();
   }
 }
 
 function updateTimer() {
   const timerElement = document.getElementById("timer");
   const minutes = Math.floor(quizTime / 60);
   const seconds = quizTime % 60;
   timerElement.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
 }
 
;
 

 function endQuiz() {
    // (Stop the timer) stops the event of the recurrin
    clearInterval(timer);
    
    // Save the score in local storage
    localStorage.setItem("quizScore", score);
    
    // Save the list of correct and wrong answers in local storage
    let correctQuestions = [];
    let incorrectQuestions = [];
    for (let i = 0; i < exam.length; i++) {
      let answer = localStorage.getItem(`answer${i}`);
      if (answer === exam[i].correctOption) {
        correctQuestions.push(exam[i]);
      } else {
        incorrectQuestions.push(exam[i]);
      }
    }
    localStorage.setItem("correctQuestions", JSON.stringify(correctQuestions));
  localStorage.setItem("incorrectQuestions", JSON.stringify(incorrectQuestions));
}

function selectAnswer() {
    let selectedOption = document.querySelector('input[name="radio"]:checked');
    if (!selectedOption) {
      return;
    }
    let answer = selectedOption.id;
    localStorage.setItem(`answer${currentQuestion}`, answer);
    if (answer === exam[currentQuestion].correctOption) {
      score++;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion === exam.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }

