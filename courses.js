
// window.onbeforeunload = function () {};


function coursesPurchased() {
//   let courseContainer = document.getElementById("courseContainer");

//   const productsInCart = localStorage.getItem("productsInCart");

//   localStorage.setItem("purchasedCourse", productsInCart);

//   window.localStorage.removeItem("productsInCart");

  const itemPurchasedObj =
    JSON.parse(localStorage.getItem("purchasedCourse")) || {};
  const purchasedObjValues = Object.values(itemPurchasedObj);
  // const purchasedObjKey = Object.keys(itemPurchasedObj);

//   console.log(itemPurchasedObj);
//   console.log(purchasedObjValues);
  // console.log(purchasedObjKey);

  if (purchasedObjValues && courseContainer) {
    courseContainer.innerHTML = ""
    purchasedObjValues.map((item) => {
      courseContainer.innerHTML += `
          <div class="coursePurchased">
          <h1 class="purchsedCourseName">${item.name}</h1>
          <img class="purchasedCourseImg" src="./Images/${item.tag}.jpeg">
          </div>
          `;
      // console.log(item.name);
    });
  }
  // console.log(purchasedObjValues);
}

coursesPurchased();

