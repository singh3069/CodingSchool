let username = document.getElementById("name");
let course = document.getElementById("course");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let confirmPassword = document.getElementById("ConPass");
let signUpFrom = document.getElementById("signUpForm");
let signUpDiv = document.getElementById("signUpDiv");
let formDisplay = document.getElementById("formDisplay");
let closeForm = document.getElementById("closeForm");
let button = document.getElementById("signUpButton");

/**
 * adding keyup function to buttons.
 */
const inputFields = document.getElementsByClassName("inputvalitation");

for (let i = 0; i < inputFields.length; i++) {
  const el = inputFields[i];
  el.addEventListener("keypress", (e) => {
    el.style.boxShadow = "0px 0px 6px 1px green";
  });
}


// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

/**
 * adding keydown function to buttons.
 */
let inputBox = document.getElementsByClassName("inputvalitation");

for (let i = 0; i < inputBox.length; i++) {
  const el = inputBox[i];
  el.addEventListener("keydown", (e) => {
    el.style.boxShadow = "none";
  });
}


// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------


/**
 * displaying form on click.
 */
function displayForm() {
  signUpDiv.style.visibility = "visible";
  loginDiv.style.visibility = "hidden";
}
formDisplay.addEventListener("click", displayForm);



// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

/**
 * form validation function
 */
function signSubmit(event) {
  if (username.value == "") {
    username.style.boxShadow = "0px 0px 6px 1px red";
    return false;
  } else {
    username.style.boxShadow = "0px 0px 6px 1px green";
  }

  if (course.value == "") {
    course.style.boxShadow = "0px 0px 6px 1px red";
    return false;
  } else {
    course.style.boxShadow = "0px 0px 6px 1px green";
  }

  if (email.value == "") {
    email.style.boxShadow = "0px 0px 6px 1px red";
    return false;
  } else {
    email.style.boxShadow = "0px 0px 6px 1px green";
  }

  if (password.value == "") {
    password.style.boxShadow = "0px 0px 6px 1px red";
    return false;
  } else {
    password.style.boxShadow = "0px 0px 6px 1px green";
  }

  if (confirmPassword.value == "") {
    confirmPassword.style.boxShadow = "0px 0px 6px 1px red";
    return false;
  } else {
    confirmPassword.style.boxShadow = "0px 0px 6px 1px green";
  }

  if (password.value != confirmPassword.value) {
    event.preventDefault();
    password.style.boxShadow = "0px 0px 6px 1px red";
    confirmPassword.style.boxShadow = "0px 0px 6px 1px red";
    alert("confirm Password  and password must be same");
    return false;
  } else {
    password.style.boxShadow = "0px 0px 6px 1px green";
    confirmPassword.style.boxShadow = "0px 0px 6px 1px green";
  }
}

button.addEventListener("click", signSubmit);


// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------


/**
 * Hide the sign form on click.
 */
function hideForm() {
  signUpDiv.style.visibility = "hidden";
}

closeForm.addEventListener("click", hideForm);


