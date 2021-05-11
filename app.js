 const login = document.getElementById("Login")
 const loginDiv = document.getElementById("loginBox");
 const closeLoginDiv = document.getElementById("closelogindiv")
//  const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");
let feedbackForm = document.querySelector("#feedbackForm");
const feedBackDiv = document.querySelector(".feedBackDiv");
let updateDiv = document.querySelector(".updateDiv");
const manageYourAccountDIv = document.querySelector(".manageYourAccountDIv");
const signDiv = document.getElementById("signBox");









/**
 * showing feedback div ..................
 */
function showFeedbackForm () {
	feedbackForm.style.visibility = "visible";
    updateDiv.style.visibility = "hidden";
}

if(feedBackDiv)feedBackDiv.addEventListener('click', showFeedbackForm);



const closeFeedbackFormBttn = document.getElementById("closeFeedbackForm");
/**
 *  hide feedback form
 */
function hideFeedbackForm() {
  feedbackForm.style.visibility = "hidden";
}
if (closeFeedbackFormBttn)closeFeedbackFormBttn.addEventListener("click", hideFeedbackForm);




/** 
* showing update your profile from
*/
function showupdateForm () {
	updateDiv.style.visibility = "visible";
    feedbackForm.style.visibility = "hidden";
	
}
if(manageYourAccountDIv)manageYourAccountDIv.addEventListener('click', showupdateForm);


/** 
* hidding update your profile from
*/

const closeUpdateDivBttn = document.getElementById("closeUpdateDivBttn");

function hideUpdateForm(){
    updateDiv.style.visibility = "hidden";
}
if (closeUpdateDivBttn)closeUpdateDivBttn.addEventListener("click", hideUpdateForm);




//  login box js......................
function showLoginDiv() {
    // alert ("hello")
    signDiv.style.visibility = "hidden";
    loginDiv.style.visibility = "visible";
}




function hideLoginDiv() {
    loginDiv.style.visibility = "hidden";
};

if(login ) login.addEventListener('click', showLoginDiv);
if(closeLoginDiv)closeLoginDiv.addEventListener('click' , hideLoginDiv);