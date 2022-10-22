const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector(".login__name");

const greeting = document.querySelector("#greeting-div");
const greetMessage = greeting.querySelector(".greeting__message");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, username);
  onShowGreetings(username);
}

function onShowGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greetMessage.innerHTML = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  onShowGreetings(saveUsername);
}
