
/**
 * removes the courses added to cart from cart.
 */
function removeItemFromCartHandler(event) {
  const productID = event.target.dataset.id;
  const oldData = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );
  const newData = oldData.filter(
    (i) => i.name.split(" ").join("") !== productID
  );
  const Obj = {};
  const newObj = newData.map((i) => (Obj[i.tag] = i));
  setItemsInLocalStorage(Obj);
  displayItemsInCartLayout();
  showCartItemsCount();
}

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------


/**
 * Show the Courses in UI in the cart page when thye are added to cart.
 */
function displayItemsInCartLayout() {
  let cartItems = getitemsFromLocalStorage().itemsArray;
  let productContainer = document.querySelector(".products");
  const cartCost = getitemsFromLocalStorage().totalCost;

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    cartItems.map((item) => {
      productContainer.innerHTML += `
          <div class="product">
          <p class="cancelbutton" data-id=${item.name
            .split(" ")
            .join("")} onClick="removeItemFromCartHandler(event)">+</P>
          <img class="cartImg" src="./Images/${item.tag}.jpeg">
          <h3>${item.name}</h3>
          </div>
          <div class="price">₹ ${item.price}.00</div>
          <div class="quantity">
          
          <span>${item.inCart}</span>
          
          </div>
          <div class="total">
          ₹&nbsp;${item.inCart * item.price}.00
          </div>
          `;
    });

    if (cartCost == 0) {
      productContainer.innerHTML = `<p>Nothing Purchased </p>`;
    } else {
      productContainer.innerHTML += `
          <div class="cartTotalContainer">
              <h4 class="cartTotalTitle">
                  <strong>Cart Total</strong> &nbsp; ₹ ${cartCost}.00
              </h4>
              <button class= "Checkout_button" onclick="checkOut()">Check Out</button>
          </div>
      `;
    }
  }
}
displayItemsInCartLayout();


// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------


/**
 * Show the payemnt div 
 */
function checkOut() {
  const cartCost = getitemsFromLocalStorage().totalCost;
  document.querySelector(".paymentDiv").style.visibility = "visible";
  let CheckOutPayment = document.querySelector(".CheckOutPayment");
  CheckOutPayment.innerHTML = `
    Total &nbsp; ₹ ${cartCost}.00
    `;
}



// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

const cancelPaymentButton = document.querySelector(".cancelPaymentButton");

/**
 * Cancel the Payment
 */
function cancelPayment() {
  document.querySelector(".paymentDiv").style.visibility = "hidden";
}

if (cancelPaymentButton)
  cancelPaymentButton.addEventListener("click", cancelPayment);




// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
/**
 * Confirms payment and purchased courses are added to myprofile in purchased courses section
 */
function addingEverythingToCoursesPurchased() {
  showCartItemsCount();
  displayItemsInCartLayout();
  alert(
    `                PAYMENT SUCCESSFULLY DONE ! 
    Purchased Courses Are Now Available In MyProfile 
    `
  );

  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  const purchasedCourse = JSON.parse(localStorage.getItem("purchasedCourse"))|| {}
  localStorage.setItem("purchasedCourse", JSON.stringify({...productsInCart , ...purchasedCourse}));
  window.localStorage.removeItem("productsInCart");
}
