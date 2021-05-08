 const login = document.getElementById("Login")
 const loginDiv = document.getElementById("loginBox");
 const closeLoginDiv = document.getElementById("closelogindiv")
 const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


// add to cart button and whole function to add to cart
const addToCartButton = document.getElementsByClassName('addtocartbtn')




let feedbackForm = document.querySelector(".feedbackForm");
const feedBackDiv = document.querySelector(".feedBackDiv");


let updateDiv = document.querySelector(".updateDiv");
const manageYourAccountDIv = document.querySelector(".manageYourAccountDIv");


let matchingButton = document.getElementById('buttonSingup');


const sign = document.getElementById("Sign")
const signDiv = document.getElementById("signBox");
const closeSignDiv = document.getElementById("closeSigndiv")






// showing feedback div and hidding it function start..................
function showFeedbackForm () {
	feedbackForm.style.visibility = "visible";
	
}


if(feedBackDiv)feedBackDiv.addEventListener('click', showFeedbackForm);

document.addEventListener('mouseup', function(e) {
//   var container = document.getElementById('container');
  if(!feedbackForm.contains(e.target)) {
    feedbackForm.style.visibility = "hidden";
  }
});

// showing feedback div and hidding it end..................


// showing update your account box 
function showupdateForm () {
	updateDiv.style.visibility = "visible";
	
}


if(manageYourAccountDIv)manageYourAccountDIv.addEventListener('click', showupdateForm);

document.addEventListener('mouseup', function(e) {
//   var container = document.getElementById('container');
  if (!updateDiv.contains(e.target)) {
    updateDiv.style.visibility = "hidden";
  }
});
// update your account function ends


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
if(closeLoginDiv) closeLoginDiv.addEventListener('click' , hideLoginDiv);


// Sign box js...............



// function showSignDiv() {
//     signDiv.style.visibility = "visible";
//     loginDiv.style.visibility = "hidden";
// };

// function hideSignDiv() {
//     signDiv.style.visibility = "hidden";
// };

// if(sign) sign.addEventListener('click', showSignDiv);
// if(closeSignDiv) closeSignDiv.addEventListener('click' , hideSignDiv);



// if(loginButton) loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;
// });


























