
function removeItemFromCartHandler(event) {
  // console.log(event)
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
  console.log(cartItems)
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






function cancelPayment() {
  document.querySelector(".paymentDiv").style.visibility = "hidden";
}

if (cancelPaymentButton)cancelPaymentButton.addEventListener("click", cancelPayment);



function addingEverythingToCoursesPurchased() {
  showCartItemsCount();
  displayItemsInCartLayout();
  alert('After the Payment submission Purchased Course will be  added to Courses Purchased section in Myprofile');
  let courseContainer = document.getElementById("courseContainer");

  const productsInCart = localStorage.getItem("productsInCart");

  localStorage.setItem("purchasedCourse", productsInCart);

  window.localStorage.removeItem("productsInCart");

  // if(window.location = "mycourses.html"){
  //   coursesPurchased();
  // }
}




// function coursesPurchased(){
//   let courseContainer = document.getElementById("courseContainer");
  
//   const productsInCart = localStorage.getItem("productsInCart");
  
//   localStorage.setItem("purchasedCourse", productsInCart);
  
//   window.localStorage.removeItem("productsInCart");


//   const itemPurchasedObj = JSON.parse(localStorage.getItem("purchasedCourse")) || {} ;
//   const purchasedObjValues = Object.values(itemPurchasedObj);
//   // const purchasedObjKey = Object.keys(itemPurchasedObj);


//   // console.log(itemPurchasedObj);
//   // console.log(purchasedObjValues);
//   // console.log(purchasedObjKey);

//   if (purchasedObjValues && courseContainer) {
//     courseContainer.innerHTML = ''
//     purchasedObjValues.map((item) => {
//       courseContainer.innerHTML += `
//           <div class="coursePurchased">
//           <h1 class="purchsedCourseName">${item.name}</h1>
//           <img class="purchasedCourseImg" src="./Images/${item.tag}.jpeg">
//           </div>
//           `;
//       // console.log(item.name);
//     });
//   }
//   // console.log(purchasedObjValues);
  
// }





// function coursesPurchased() {
//   let courseContainer = document.getElementById("courseContainer");
//   const productsInCart = localStorage.getItem("productsInCart");
//   localStorage.setItem("purchasedCourse", productsInCart);
//   const itemPurchased = localStorage.getItem("purchasedCourse");
//   const purchasedCourseObj = JSON.parse(itemPurchased) || {};
//   const purcahsedCourseNameImage = Object.values(purchasedCourseObj);
//   window.localStorage.removeItem("productsInCart");

//   console.log(purcahsedCourseNameImage);

//   if (purcahsedCourseNameImage && courseContainer) {
//     courseContainer.innerHTML = "";
//     purcahsedCourseNameImage.map((el) => {
//       return (courseContainer.innerHTML += `
//           <div class="coursePurchased">
//           <h1 class="purchsedCourseName">${el.name}</h1>
//           <img class="purchasedCourseImg" src="./Images/${el.tag}.jpeg">
//           </div>
//           `);
//       // console.log(el.name);
//     });
//   }
// }


