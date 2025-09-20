const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const afterLogin = document.querySelector("#after-login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username); // 로그인 성공 시 화면 토글은 여기서 진행
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  // 로그인 폼은 숨기고, 로그인 이후 섹션은 보여줍니다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  if (afterLogin) afterLogin.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // 저장된 이름이 없으면 → 로그인 폼만 보이기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);     // 인사말은 가려둠
  if (afterLogin) afterLogin.classList.add(HIDDEN_CLASSNAME); // 투두/명언/날씨 묶음 숨김
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 저장된 이름이 있으면 → 곧바로 환영 + 투두/명언/날씨 보이기
  paintGreetings(savedUsername); // 이 안에서 폼/after-login 토글
}
