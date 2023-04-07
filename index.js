const userInfo = JSON.parse(localStorage.getItem('users'));

function renderLoginAndSignUp() {
const ul = document.getElementById('ul');


const listItem1 = document.createElement('li');
const link1 = document.createElement('a');
link1.href = 'log-in.html';
link1.textContent = 'Log in';
listItem1.appendChild(link1);


const listItem2 = document.createElement('li');
const link2 = document.createElement('a');
link2.href = 'registration.html'; 
link2.textContent = 'Sign up';
listItem2.appendChild(link2);


ul.appendChild(listItem1);
ul.appendChild(listItem2);
}

function renderUserNameAndLogOut(){
  const userName = userInfo[0].username;
  const ul = document.getElementById('ul');

  const listItem1 = document.createElement('li');
  const link1 = document.createElement('a');
  link1.textContent = userName;
  listItem1.appendChild(link1);
  ul.appendChild(listItem1);

  const listItem2 = document.createElement('li');
  const link2 = document.createElement('a');
  link2.textContent =  "Log Out";
  link2.addEventListener('click', () => {
    localStorage.clear(); 
    window.location.href = 'home.html';
    window.location.reload();
  });
  listItem2.appendChild(link2);
  ul.appendChild(listItem2);
}

if (userInfo && userInfo.length > 0) {
  renderUserNameAndLogOut();
} else {
  renderLoginAndSignUp();
}

const button = document.getElementById("submit");
button.addEventListener("click", function () {
  if (userInfo && userInfo.length > 0) {
    window.location.href = "quiz.html";
  } else {
    window.location.href = "registration.html";
  }
});