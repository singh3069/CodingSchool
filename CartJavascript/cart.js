
function removeItemFromCartHandler(event) {
  console.log(event)
  const productID = event.target.dataset.id
  const oldData = Object.values(
    JSON.parse(localStorage.getItem('productsInCart'))
  )
  const newData = oldData.filter(
    (i) => i.name.split(' ').join('') !== productID
  )
  const Obj = {}
  const newObj = newData.map((i) => (Obj[i.tag] = i))
  setItemsInLocalStorage(Obj)
  displayItemsInCartLayout()
  showCartItemsCount()
}

function displayItemsInCartLayout() {
  let cartItems = getitemsFromLocalStorage().itemsArray
  // console.log(cartItems)
  let productContainer = document.querySelector('.products')
  const cartCost = getitemsFromLocalStorage().totalCost

  if (cartItems && productContainer) {
    productContainer.innerHTML = ''
    cartItems.map((item) => {
      productContainer.innerHTML += `
          <div class="product">
          <p class="cancelbutton" data-id=${item.name
            .split(' ')
            .join('')} onClick="removeItemFromCartHandler(event)">+</P>
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
          `
    })

    if (cartCost == 0) {
      productContainer.innerHTML = `<p>Nothing Purchased </p>`
    } else {
      productContainer.innerHTML += `
          <div class="basketTotalContainer">
              <h4 class="basketTotalTitle">
                  Basket Total &nbsp; $${cartCost}.00
              </h4>
              <button class= "payment_button" onclick="checkOut()">Check Out</button>
          </div>
      `;
    }
  }
}
displayItemsInCartLayout()


const cancelPaymentButton = document.querySelector(".cancelPaymentButton");


// this function is applied when a onclick is added to checkout button and a check out from is made in  cart page
function checkOut() {
  const  cartCost = getitemsFromLocalStorage().totalCost
  document.querySelector(".paymentDiv").style.visibility = "visible";
  let CheckOutPayment = document.querySelector(".CheckOutPayment");
  CheckOutPayment.innerHTML = `
    Total &nbsp; $${cartCost}.00
    `;
}



// checkOut function when payment page is added
// function checkOut(){
//   console.log("hello1");
//   const cartCost = getitemsFromLocalStorage().totalCost;
//   console.log(cartCost);
//   const finalPayment = document.getElementsByClassName("finalPayment");
//   if (finalPayment) {
//   finalPayment.innerHTML = `
//     Total &nbsp; $${cartCost}.00
//     `;
//   }
//   window.document.location = "payment.html";
// }


function cancelPayment() {
  document.querySelector(".paymentDiv").style.visibility = "hidden";
}

if (cancelPaymentButton)cancelPaymentButton.addEventListener("click", cancelPayment);


// const confirmPaymentButton = document.querySelector(".confirmPaymentButton");



function addingEverythingToCoursesPurchased() {
  // console.log("hello");
  // const productsPurchaseMessage = document.getElementById("productsPurchaseMessage");
  // localStorage.clear();
  displayItemsInCartLayout();
  showCartItemsCount();
  alert('After the Payment submission Purchased Course will be  added to Courses Purchased section in Myprofile');
  coursesPurchased();
}


function coursesPurchased(){
  const productsInCart = localStorage.getItem("productsInCart");
  localStorage.setItem("purchasedCourse", productsInCart);
  const itemPurchased = localStorage.getItem("purchasedCourse");
  // console.log(productsInCart);

  // console.log(itemPurchased);

  const rawCourseObj = JSON.parse(itemPurchased) || {};
  const purcahsedCourseNameImage = Object.values(rawCourseObj);
  window.localStorage.removeItem("productsInCart");
  // console.log(purcahsedCourseNameImage);

  let courseContainer = document.getElementById("courseContainer");

  if (purcahsedCourseNameImage && courseContainer) {
    courseContainer.innerHTML = "";
    purcahsedCourseNameImage.map((el) => {
      courseContainer.innerHTML += `
          <div class="coursePurchased">
          <img class="purchasedCourseImg" src="./Images/${el.tag}.jpeg">
          <h3 class="purchsedCourseName">${el.name}</h3>
          </div>
          `;
    });
  }
}




