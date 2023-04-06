import { JS } from './questions.js';
import { HTML } from './questions.js';
import { CSS } from './questions.js';
console.log(JS);
console.log(HTML);
console.log(CSS);

let currentQuestion = 0;
// display the qustion from the array 

function displayQuestion() {
    let question = JS[currentQuestion];
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

    document.getElementById("question-count").textContent = `Question ${currentQuestion + 1} of ${JS.length}`;
}
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
 
 let correctQuestions = [];
 let incorrectQuestions = [];
 
 function selectAnswer() {
     let selectedOption = document.querySelector('input[name="radio"]:checked');
     if (!selectedOption) {
         return;
     }
     let answer = selectedOption.id;
     if (answer === JS[currentQuestion].correctOption) {
         score++;
         correctQuestions.push(JS[currentQuestion]);
     } else {
         incorrectQuestions.push(JS[currentQuestion]);
     }
     selectedOption.checked = false;
     currentQuestion++;
     if (currentQuestion === JS.length) {
         endQuiz();
     } else {
         displayQuestion();
     }
 }
 
  