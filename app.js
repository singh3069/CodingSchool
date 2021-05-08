 const login = document.getElementById("Login")
 const loginDiv = document.getElementById("loginBox");
 const closeLoginDiv = document.getElementById("closelogindiv")
 const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


// add to cart button and whole function to add to cart
const addToCartButton = document.getElementsByClassName('addtocartbtn')


const confirmPaymentButton = document.querySelector(".confirmPaymentButton");
const cancelPaymentButton = document.querySelector(".cancelPaymentButton");

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
  if (!feedbackForm.contains(e.target)) {
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



function showSignDiv() {
    signDiv.style.visibility = "visible";
    loginDiv.style.visibility = "hidden";
};

function hideSignDiv() {
    signDiv.style.visibility = "hidden";
};

if(sign) sign.addEventListener('click', showSignDiv);
if(closeSignDiv) closeSignDiv.addEventListener('click' , hideSignDiv);



if(loginButton) loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
});



// function matchPassword(event) {
//     let password = document.getElementById('password');
//     let confirmPassword = document.getElementById('password2');
//     // let userUpdateDiv = document.querySelector(".updateDiv");

//     // console.log(password)
//     // console.log(confirmPassword)

//     if (password.value.trim() == "" || confirmPassword.value.trim() == "") {
//         alert(" field can not be empty")
//     }

//     if(password.value != confirmPassword.value){
//         event.preventDefault();
// 	    // userUpdateDiv.style.visibility = "visible";
//         // confirmPassword == "";
//         // password == "";
//         password.style.borderColor = 'red';
//         confirmPassword.style.borderColor = 'red';
//         alert("Password didn't match try again.");
        
//     } 
//     // else if(password == confirmPassword) {
//     //     alert("Password  match.");
        
//     // } 
// }
// if(matchingButton)matchingButton.addEventListener('click', matchPassword)




function test(event){
    const productID = event.target.dataset.id
    // console.log(productID)
    const oldData = Object.values(JSON.parse( localStorage.getItem('productsInCart')));
    // console.log(oldData)
    const newData = oldData.filter(i => i.name.split(' ').join('') !== productID )
    // console.log(newData)
    const Obj = {}
    const newObj = newData.map(i => Obj[i.tag] = i )
    // console.log({Obj , newObj})
    localStorage.setItem('productsInCart' , JSON.stringify(Obj));
    
    decreaseCartCount();
    decreaseTotalCost();
    displayCart();
    
    // let productNumbers = localStorage.getItem('cartNumbers');

    // productNumbers = parseInt(productNumbers);

 //  checking if any thing in local storage or not and increasing cart count on top 
    // if(productNumbers){
    //     localStorage.setItem('cartNumbers', productNumbers - 1);
    //     document.querySelector('.cart span').textContent = productNumbers - 1;
    // } else {
    //     localStorage.setItem('cartNumbers', 1);
    //     document.querySelector('.cart span').textContent = 1;
    // }
    
    // localStorage.removeItem('productsInCart');
    
}


function decreaseTotalCost (event) {

    let cartCost = localStorage.getItem('totalCost');
    let products = Object.values(JSON.parse( localStorage.getItem('productsInCart')));
    let totalPrice = 0
    products.map(i => totalPrice = totalPrice + i.price)
    localStorage.setItem('totalCost' , totalPrice);

    // console.log(totalPrice)

    // console.log(cartCost)
    // console.log(products)

    // if(cartCost != null) {
    //     cartCost = parseInt(cartCost);
    //     localStorage.setItem("totalCost", cartCost - product.price);
    // } if(cartCost == null) {
    //     localStorage.setItem("totalCost", cartCost - product.price);
    // } else {
    //     localStorage.setItem("totalCost",product.price);
    // }
}


function reduceCart(){
    // const addToCartButton = document.getElementsByClassName('addtocartbtn')
    // console.log(products.inCart)
    // //  if(products.inCart === 1){
    // //      console.log('hello')
    // //      addToCartButton.disabled="true"
    // //  }
    let products = Object.values(JSON.parse( localStorage.getItem('productsInCart')));
    // console.log(products)
    let Id = products.filter(product => product.inCart);
    console.log(Id);
    let addToCartButton = document.getElementsByClassName('addtocartbtn');
        if(products.tag){
            addToCartButton[i].setAttribute('disabled',true);
        }
}




let products = [
    {
        name:'HTML and CSS',
        tag:'img1',
        price:450,
        inCart: 0
    },

    {
        name:'JavaScript',
        tag:'img2',
        price:550,
        inCart: 0
    },

    {
        name:'C++',
        tag:'img3',
        price:600,
        inCart: 0
    },

    {
        name:'Python',
        tag:'img4',
        price:800,
        inCart: 0
    },

    {
        name:'#C',
        tag:'img5',
        price:1000,
        inCart: 0
    },

    {
        name:'Bootstrap',
        tag:'img6',
        price:550,
        inCart: 0
    },

    {
        name:'React.JS',
        tag:'img7',
        price:4550,
        inCart: 0
    },

    {
        name:'Angular',
        tag:'img8',
        price:2000,
        inCart: 0
    }
];

for (let i = 0 ; i < addToCartButton.length; i++) {
   addToCartButton[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
    // reduceCart();
    // addToCartButton[i].setAttribute('disabled',true);
   });
}; // checking that eventlistener is applied to every buttons 






// its check the localstorage of cart numbers and match to the cart counte
function onLoadCartNumbers () {
 let productNumbers = localStorage.getItem('cartNumbers');
 
 if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
 }
}


// adding increasing the cart count

function cartNumbers(product) {
    // console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

 //  checking if any thing in local storage or not and increasing cart count on top 
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
    localStorage.setItem('cartNumbers',  1);
    document.querySelector('.cart span').textContent = 1;
    }

 setItems(product) // this function is  adding items to local storage 

}


function decreaseCartCount() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);


//   checking if any thing in local storage or not and decreasing the  cart count on top 
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
    } else {
    localStorage.setItem('cartNumbers',  1);
    document.querySelector('.cart span').textContent = 1;
    }
    // removeItems();
}


// function removeItems() {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems); 
    
//     if(cartItems){

//         if(cartItems[product.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]: product
//             }
//         }
//         cartItems[product.tag].inCart = 1;
//     } else {
//         product.inCart = 1;
//         cartItems = {
//             [product.tag]: product
//         }
        
//     }

//     localStorage.setItem("productsInCart", JSON.stringify
//     (cartItems));
// };




function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems); 
    
    if(cartItems != null){

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
        
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
};


// this function calculate the total cost of the product/course purchased

// ------------------------------------------------------------
function totalCost(product){
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost",product.price);
    }
}

// ------------------------------------------------------


// function totalCosts(product){
//     // console.log("The product price is", product.price);
//     let cartCost = localStorage.getItem('totalCost');
//     if(cartCost == null) {
//         cartCost = parseInt(cartCost);
//         localStorage.setItem("totalCost", cartCost - product.price);
//     } else {
//         localStorage.setItem("totalCost",product.price);
//     }
// }








// this function put products from local storage to cart page and  it runs when page relods

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    const cartCost = localStorage.getItem('totalCost');
    // console.log(cartCost)


    if( cartItems && productContainer ){
        productContainer.innerHTML = ''; 
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <p class="cancelbutton" data-id=${item.name.split(' ').join('')} onClick="test(event)">+</P>
            <img class="cartImg" src="./Images/${item.tag}.jpeg">
            <h3>${item.name}</h3>
            </div>
            <div class="price">$${item.price}.00</div>
            <div class="quantity">
            
            <span>${item.inCart}</span>
            
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        if(cartCost == 0){
            productContainer.innerHTML =`<p>Nothing Purchased </p>`
        }else {
            productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total &nbsp; $${cartCost}.00
                </h4>
                <button class= "payment_button" onClick="checkOut()"  >Check Out</button>
            </div>
        `;
        }
        
    }
    
}



onLoadCartNumbers();
displayCart();

function checkOut () {
    const cartCost = localStorage.getItem('totalCost');
    document.querySelector(".paymentDiv").style.visibility = "visible"

    let CheckOutPayment = document.querySelector(".CheckOutPayment");
    CheckOutPayment.innerHTML = `
    Total &nbsp; $${cartCost}.00
    `
    console.log('hello')
}



function cancelPayment(){
    document.querySelector(".paymentDiv").style.visibility = "hidden"
}

if(cancelPaymentButton)cancelPaymentButton.addEventListener("click", cancelPayment)


// for (let i = 0 ; i < addToCartButton.length; i++) {
//    addToCartButton[i].addEventListener('click', () => {
//     cartNumbers(products[i]);
//     totalCost(products[i]);
//     // removeFromCart(products[i])
//    });
// };









// const sidebarlist = document.getElementById("sidebarlist");












