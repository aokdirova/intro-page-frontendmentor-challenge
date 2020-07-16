const nameInput = document.getElementById("first-name-input");
const familyNameInput = document.getElementById("family-name-input");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const form = document.querySelector("form");

const nameError = document.querySelector(".error1");
const familyNameError = document.querySelector(".error2");
const emailError = document.querySelector(".error3");
const passwordError = document.querySelector(".error4");

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function showError() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "First Name cannot be empty!";
    nameInput.className = "border-invalid";
    const divEl = document.querySelector(".errors-and-icons-1");
    divEl.style.visibility = "visible";
  }
  if (familyNameInput.value.trim() === "") {
    familyNameError.textContent = "Family Name cannot be empty!";
    familyNameInput.className = "border-invalid";
    const divEl1 = document.querySelector(".errors-and-icons-2");
    divEl1.style.visibility = "visible";
  }
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password cannot be empty!";
    passwordInput.className = "border-invalid";
    const divEl2 = document.querySelector(".errors-and-icons-4");
    divEl2.style.visibility = "visible";
  }
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email cannot be empty!";
    emailInput.className = "border-invalid";
    const divEl3 = document.querySelector(".errors-and-icons-3");
    divEl3.style.visibility = "visible";
  } else if (!isEmail(emailInput.value.trim())) {
    emailError.textContent = "Invalid email!";
    emailInput.className = "border-invalid";
    const divEl3 = document.querySelector(".errors-and-icons-3");
    divEl3.style.visibility = "visible";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === "") {
    showError();
  }
  if (familyNameInput.value.trim() === "") {
    showError();
  }
  if (passwordInput.value.trim() === "") {
    showError();
  }
  if (emailInput.value.trim() === "" || !isEmail(emailInput.value.trim())) {
    showError();
  }
});

nameInput.addEventListener("input", () => {
  if (nameInput.validity.valid) {
    nameError.textContent = "";
    nameInput.className = "border";
    const divEl = document.querySelector(".errors-and-icons-1");
    divEl.style.visibility = "hidden";
  }
});
familyNameInput.addEventListener("input", () => {
  if (familyNameInput.validity.valid) {
    familyNameError.textContent = "";
    familyNameInput.className = "border";
    const divEl = document.querySelector(".errors-and-icons-2");
    divEl.style.visibility = "hidden";
  }
});

emailInput.addEventListener("input", () => {
  if (!emailInput.value.trim() === "" || 
    isEmail(emailInput.value.trim())) {
    emailError.textContent = "";
    emailInput.className = "border";
    const divEl = document.querySelector(".errors-and-icons-3");
    divEl.style.visibility = "hidden";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.validity.valid) {
    passwordError.textContent = "";
    passwordInput.className = "border";
    const divEl = document.querySelector(".errors-and-icons-4");
    divEl.style.visibility = "hidden";
  }
});
