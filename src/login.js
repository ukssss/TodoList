const todoDiv = document.querySelector("#todo-div");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector(".login__input");

const greetingDiv = document.querySelector("#greeting-div");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, username);
  onEnterUserspace(username);
}

function onEnterUserspace(username) {
  const hours = new Date().getHours();

  todoDiv.classList.remove(HIDDEN_CLASS);
  greetingDiv.classList.remove(HIDDEN_CLASS);

  if (hours >= 6 && hours < 12) {
    greetingDiv.innerHTML = `<span class="greeting__text">Good Morning ${username} :)</span>`;
  } else if (hours >= 12 && hours < 18) {
    greetingDiv.innerHTML = `<span class="greeting__text">Good Afternoon ${username} :)</span>`;
  } else {
    greetingDiv.innerHTML = `<span class="greeting__text">Good Night ${username} :)</span>`;
  }
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  onEnterUserspace(saveUsername);
}
