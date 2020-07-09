const myBtn = document.querySelector(".myButton");
const form = document.querySelector("form");
const nameValue = document.getElementById("first-name-input").value;
const familyNameValue = document.getElementById("family-name-input").value;
const emailValue = document.getElementById("email").value;
const passwordValue = document.getElementById("password").value;
const icon1 = document.getElementById("first-i");
const icon2 = document.getElementById("second-i");
const icon3 = document.getElementById("third-i");
const icon4 = document.getElementById("fourth-i");

form.addEventListener("submit", (event) => {
  event.preventDefault();
 checkNameInput();
 checkFamilyNameInput();
 checkEmailInput();
 checkPasswordInput();
 
});

function createErrorMessage (id,errorMessage,styleNumber) {
  const paragraph = document.createElement('p');
  paragraph.textContent = errorMessage;
  paragraph.className = `. paragraph paragraph-${styleNumber}`;
  document.getElementById(id).insertAdjacentElement('afterend',paragraph);

}

function changeStyle(id, icon) {
  const inputElement = document.getElementById(id);
  inputElement.style.borderColor = "red";
  icon.style.visibility = "visible";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkNameInput() {
  if (nameValue.trim() === "") {
    createErrorMessage("first-name-input", "Name cannot be empty",1);
    changeStyle("first-name-input", icon1);
  } else {
    document.getElementById("first-name-input").className = "border";
  }
}
  
  function checkFamilyNameInput() {
  if (familyNameValue.trim() === "") {
    createErrorMessage("family-name-input", "Name cannot be empty",2);
    changeStyle("family-name-input", icon2);
  } else {
    document.getElementById("family-name-input").className = "border";
  }
}

function checkEmailInput() {
   if (emailValue.trim() === "") {
    createErrorMessage("email", "Email cannot be empty",3);
    changeStyle("email", icon3);
  } else if (!isEmail(emailValue.trim())) {
    createTemplate("email", "Not a valid email",3);
    changeStyle("email", icon3);
  }else {
    document.getElementById("email").className = "border";
  }
}


  function checkPasswordInput() {

   if (passwordValue.trim() === "") {
    createErrorMessage("password", "Password cannot be empty",4);
    changeStyle("password", icon4);
  } else {
    document.getElementById("password").className = "border";
  }
}
