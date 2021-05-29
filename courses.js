
function coursesPurchased() {
  let courseContainer = document.getElementById("courseContainer");
  const itemPurchasedObj =
    JSON.parse(localStorage.getItem("purchasedCourse")) || {};
  const purchasedObjValues = Object.values(itemPurchasedObj);
  // const purchasedObjKey = Object.keys(itemPurchasedObj);

  if (purchasedObjValues && courseContainer) {
    courseContainer.innerHTML = ""
    purchasedObjValues.map((item) => {
      courseContainer.innerHTML += `
          <div class="coursePurchased" id="${item.idName}">
          <p class="removePurchasedCourse" data-id=${item.name
            .split(" ")
            .join("")} onClick="removeItemFromCoursePurchased(event)">+</P>
            <img class="purchasedCourseImg" src="./Images/${item.tag}.jpeg">
            <h1 class="purchsedCourseName">${item.name}</h1>
          </div>
          `;
    });
  }
}

coursesPurchased();

