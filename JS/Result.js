// let questions = JSON.parse(sessionStorage.getItem("storedAnswers"));
// const userInfo = JSON.parse(sessionStorage.getItem("userse"));


// use this to render the name and the postion of the user

// function getExamTypeFromLocalStorage() {
//   const userData = JSON.parse(sessionStorage.getItem("userse"));
//   const position = userData.position;

//   let examType;
//   switch (position) {
//     case "2":
//       examType = "HTML";
//       break;
//     case "3":
//       examType = "CSS";
//       break;
//     case "4":
//       examType = "JS";
//       break;
//     default:
//       console.log("Invalid position value.");
//   }

//   return examType;
// }
// const examType = getExamTypeFromLocalStorage();

// function result() 
// {
//   const userName = userInfo.username;

//   let quizInfo = document.getElementById("quizInfo");
//   let username = document.createElement("h1");
//   let Result = document.createElement("h2");
//   let examtype = document.createElement("h2");
//   let Score = document.createElement("h2");
//   let yo1 = document.createElement("img");
//   // let passOrfail = document.createElement("h2");
//   let asdf = document.getElementById("asd");
//   quizInfo.appendChild(username);
//   username.textContent = ` ${userName} `;
//   quizInfo.appendChild(examtype);
//   examtype.textContent = ` ${examType} `;
//   asdf.style.backgroundImage =
//     correctAnswers >= 5
//       ? `linear-gradient(green, white)`
//       : `linear-gradient(red, rgb(216, 87, 87))`;
//   quizInfo.appendChild(Result);
//   Result.textContent = `Result`;
//   quizInfo.appendChild(Score);
//   Result.textContent = `Score : ${correctAnswers}/10`;
//   quizInfo.appendChild(yo1);
//   yo1.src = correctAnswers >= 5 ? `Images/yes.png` : `Images/no.png`;
//   yo1.style.width = "200px";
//   yo1.style.height = "200px";
//   quizInfo.style.color = "white";
//   quizInfo.style.padding = "3rem";
//   quizInfo.style.borderRadius = "10px";
//   quizInfo.style.border = "solid 3px white";
//   quizInfo.style.width = "33rem";
//   quizInfo.style.backgroundColor = `white`;
//   quizInfo.style.color = "black";
//   quizInfo.style.textAlign = "center";
// }
// window.addEventListener("load", result);

// function renderAnswers() 
// {
//   let table = document.getElementById("resulttable");
//   table.style = "display: none";

//   // Loop through each item in the array
//   for (let i = 0; i < questions.length; i++) {
//     let item = questions[i];

//     // Create a new row for each item
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let td4 = document.createElement("td");
//     table.appendChild(tr);
//     tr.appendChild(td1);
//     td1.textContent = `${i + 1}`;
//     tr.appendChild(td2);
//     td2.textContent = `${item.question}`;
//     tr.appendChild(td3);
//     td3.textContent = `${item.userAnswer}`;
//     tr.appendChild(td4);
//     td4.textContent = `${item.correctAnswer}`;
//     tr.style.backgroundColor = `white`;

//     td3.style.color = item.userAnswer === item.correctAnswer ? "green" : "	red"; // Highlight the user's answer in green if it's correct, and red if it's incorrect
//     table.style.color = "black";
//   }
// }
// renderAnswers();


// let button = document.getElementById("submit");
// let toggle = false;

// function handleButtonClick(event)
//  {
//   event.preventDefault();
//   let table1 = document.getElementById("resulttable");

//   toggle = !toggle;
//   if (toggle) {
//     table1.style.display = "block";
//     button.textContent = `Hide Answers`;
//   } else {
//     table1.style.display = "none";
//     button.textContent = `Show Answers`;
//   }
// }

// button.addEventListener("click", handleButtonClick);

// let correctAnswers = 0;
// let incorrectAnswers = 0;

// questions.forEach((arr) => 
// {
//   if (arr.userAnswer === arr.correctAnswer) {
//     correctAnswers++;
//   } else {
//     incorrectAnswers++;
//   }
// });

// console.log(`Correct answers: ${correctAnswers}`);
// console.log(`Incorrect answers: ${incorrectAnswers}`);


let questions = JSON.parse(sessionStorage.getItem("storedAnswers"));
let userInfo = JSON.parse(sessionStorage.getItem("userse"));
let time = JSON.parse(localStorage.getItem("quizTime"));

let num=1;
function renderUserNameAndLogOut() {
  const userName = userInfo.username;
  const ul = document.getElementById("ul");

  const listItem2 = document.createElement("li");
  const listItem1 = document.createElement("li");
  const link2 = document.createElement("a");
  const link1 = document.createElement("a");
  link2.textContent = "Log Out";
  link1.textContent = userName;
  link2.addEventListener("click", () => {
    window.location.href = "index.html";
    sessionStorage.clear();
  });
  listItem2.appendChild(link1);
  listItem2.appendChild(link2);
  ul.appendChild(listItem2);
  
}
if (userInfo) {
  renderUserNameAndLogOut();
}

function secondsToMinutesAndSeconds(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  let result = minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');
  return result;
}


let time3=Math.abs(time-660)
let timem=secondsToMinutesAndSeconds(time3);

console.log(userInfo);
function getExamTypeFromLocalStorage() {
    const userData = JSON.parse(sessionStorage.getItem("userse"));
    const position = userData.position;
  
    let examType;
    switch (position) {
      case "2":
        examType = "HTML";
        break;
      case "3":
        examType = "CSS";
        break;
      case "4":
        examType = "JS";
        break;
      default:
        console.log("Invalid position value.");
    }
  
    return examType;
  }









function numberToWords(num) {
    const words = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten"
    ];
  
    return words[num];
  }

let correctAnswers = 0;
let incorrectAnswers = 0;

questions.forEach((arr) => {
  if (arr.userAnswer === arr.correctAnswer) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }
});
const username = userInfo.username;
let constspercentage = (correctAnswers / questions.length) * 100;
console.log(`${constspercentage}%`);
const card = document.getElementById("cards")
function renderCard(){
    const info = document.getElementById("cardbody");
  

   info.innerHTML=`
   <h2 class="card-title">${username}</h2> 
   <h4 class="card-text">Percentage: ${constspercentage}%  </h4>
  <h4 class="card-text"> Correct answers: ${correctAnswers}</h4>
  <h4 class="card-text"> Incorrect answers: ${incorrectAnswers}</h4>
  <h4 class="card-text"> Exam type: ${getExamTypeFromLocalStorage()}</h4>
  <h4 class="card-text"> Time quiz: ${timem}</h4>

    `;
    info.style.backgroundImage = correctAnswers >= 5 ? `linear-gradient(green, white)` :  `linear-gradient(red, rgb(216, 87, 87))` 
    ;
    info.style.color = 'white' ;
    
    card.appendChild(info);}

renderCard();





const questionsContainer = document.getElementById("accordionExample");
function renderaccordion(){
questions.forEach((question) => {
    num++;
  const questionDiv = document.createElement("div");
  if (question.correctAnswer===question.userAnswer){
  questionDiv.innerHTML = `
  <h2 class="accordion-header " id="headingOne">
  <button class="accordion-button rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${numberToWords(num)}" aria-expanded="true" aria-controls="collapse${numberToWords(num)}">
  <h6> ${num-1}- Question: ${question.question}</h6>
  </button>
    </h2>
<div id="collapse${numberToWords(num)}" class="accordion-collapse collapse show" aria-labelledby="heading${numberToWords(num)}" data-bs-parent="#accordionExample">
  <div class="accordion-body">
  <h6 class ="bg-light rounded-5 text-success"> Correct Answer: ${question.correctAnswer}</h6>
  <br>
  <h6 class ="bg-success rounded-5" >User Answer: ${question.userAnswer} </h6>
  </div>
</div>
    `;} else{
        questionDiv.innerHTML = `
  <h2 class="accordion-header text" id="headingOne ">
  <button class="accordion-button rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${numberToWords(num)}" aria-expanded="true" aria-controls="collapse${numberToWords(num)}">
  <h6 ="bg-success rounded-5"> ${num-1}- Question: ${question.question}</h6>
  </button>
    </h2>
<div id="collapse${numberToWords(num)}" class="accordion-collapse collapse show" aria-labelledby="heading${numberToWords(num)}" data-bs-parent="#accordionExample">
  <div class="accordion-body">
  <h6 class ="bg-light rounded-5 text-success"> Correct Answer: ${question.correctAnswer}</h6>
  <br>
  <h6 class ="bg-danger rounded-5 " >User Answer: ${question.userAnswer} </h6>
  </div>
</div>
    `;
    }
  questionsContainer.appendChild(questionDiv);
});};
window.onload = function () {
    // renderherosection(); 
    renderaccordion();
  };
