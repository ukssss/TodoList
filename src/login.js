const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector(".login__input");

const userDiv = document.querySelector("#user-div");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, username);
  onEnterUserspace(username);
}

function onEnterUserspace(username) {
  userDiv.classList.remove(HIDDEN_CLASS);
  userDiv.innerHTML = `<span class="user__greeting">Good Morning ${username}!</span>`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  onEnterUserspace(saveUsername);
}
