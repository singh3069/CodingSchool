const feedBackDiv = document.querySelector(".feedBackDiv");
let updateDiv = document.querySelector(".updateDiv");
/**
 * showing feedback div ..................
 */
function showFeedbackForm () {
	feedbackForm.style.visibility = "visible";
    updateDiv.style.visibility = "hidden";
}
if(feedBackDiv)feedBackDiv.addEventListener('click', showFeedbackForm);





// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------




let feedbackForm = document.querySelector("#feedbackForm");
const closeFeedbackFormBttn = document.getElementById("closeFeedbackForm");
/**
 *  hide feedback form
 */
function hideFeedbackForm() {
  feedbackForm.style.visibility = "hidden";
}
if(closeFeedbackFormBttn)closeFeedbackFormBttn.addEventListener("click", hideFeedbackForm);



// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


const manageYourAccountDIv = document.querySelector(".manageYourAccountDIv");

/** 
* showing update your profile from
*/
function showupdateForm () {
	updateDiv.style.visibility = "visible";
    feedbackForm.style.visibility = "hidden";
	
}
if(manageYourAccountDIv)manageYourAccountDIv.addEventListener('click', showupdateForm);




// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------




const closeUpdateDivBttn = document.getElementById("closeUpdateDivBttn");
/** 
* hidding update your profile from
*/

function hideUpdateForm(){
    updateDiv.style.visibility = "hidden";
}
if(closeUpdateDivBttn)closeUpdateDivBttn.addEventListener("click", hideUpdateForm);



// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



const loginDiv = document.getElementById("loginBox");
const login = document.getElementById("Login");
/**
 * to show login form on click
 */
function showLoginDiv() {
    signUpDiv.style.visibility = "hidden";
    loginDiv.style.visibility = "visible";
}
if(login) login.addEventListener("click", showLoginDiv);


// ------------------------------------------------

const loginButton = document.getElementById("login-form-submit");

const loginForm = document.getElementById("login_form");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "Saurabh" && password === "test@gmail.com") {
    alert("You have successfully logged in.");
    window.location.replace("home.html");
  } else {
    alert("wrong id password");
  }
});



// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

const closeLoginDiv = document.getElementById("closelogindiv");
/**
 * Function to hide login div
 */

function hideLoginDiv() {
    loginDiv.style.visibility = "hidden";
};


if(closeLoginDiv)closeLoginDiv.addEventListener('click' , hideLoginDiv);




// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



const SwitchtoSignUp = document.getElementById("SwitchtoSignUp");
/**
 * switching from login to signup 
 */
function switchToSignUpFrom(){
    signUpDiv.style.visibility = "visible";
    loginDiv.style.visibility = "hidden";
}


if(SwitchtoSignUp)SwitchtoSignUp.addEventListener("click", switchToSignUpFrom);




// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------



const switchToLogin = document.getElementById("switchToLogin");
/**
 * Switching  form to signup to login 
 */

function switchLoginFrom(){
    signUpDiv.style.visibility = "hidden";
    loginDiv.style.visibility = "visible";
}

if(switchToLogin)switchToLogin.addEventListener("click", switchLoginFrom);





// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


const updateFormbutton = document.getElementById("updateFormbutton");

/**
 * cheching confirm password and password in update my profile form 
 */

function updatefrom(event) {
    let updatePassword = document.getElementById("updatePassword").value;
    let updateConfirmPassword = document.getElementById("updateConfirmPassword").value;

    if(updatePassword != updateConfirmPassword) {
    event.preventDefault();
    alert("confirm Password  and password must be same");
    return false;
}
}

if(updateFormbutton)updateFormbutton.addEventListener("click", updatefrom);
