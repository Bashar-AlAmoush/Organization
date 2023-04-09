const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", (event) => {
  

  event.preventDefault();
  const email = document.getElementById("email1").value.toLowerCase();
  const password = document.getElementById("password1").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const storedData = users.find((user) => user.email.toLowerCase() === email);
  const username=users[0].username;
  const postion=users[0].position;
  const userse={username,password,postion,password};
  console.log(username);
  sessionStorage.setItem("userse", JSON.stringify(userse));
 

  if (storedData && storedData.password === password) {
    // login successful
    window.location.href = "index.html";
  } else {
    // login failed
    alert("Invalid email or password");
  }
});