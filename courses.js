function coursesPurchased() {
  let courseContainer = document.getElementById("courseContainer");
  const itemPurchasedObj =
    JSON.parse(localStorage.getItem("purchasedCourse")) || {};
  const purchasedObjValues = Object.values(itemPurchasedObj);
  // const purchasedObjKey = Object.keys(itemPurchasedObj);

  if (purchasedObjValues && courseContainer) {
    courseContainer.innerHTML = "";
    purchasedObjValues.map((item) => {
      courseContainer.innerHTML += `
          <div class="coursePurchased">
          <p class="removePurchasedCourse" data-id=${item.name
            .split(" ")
            .join("")} onClick="removeItemFromCoursePurchased(event)">+</P>
            <img class="purchasedCourseImg" src="./Images/${item.tag}.jpeg">
            <h1 class="purchsedCourseName" id="${item.idName}" data=${item.name} onClick="switchToPreferedCourse(event)">${item.name}</h1>
          </div>
          `;
    });
  }
}

coursesPurchased();


function removeItemFromCoursePurchased(event) {
  console.log(event.target.dataset.id);
  let productId = event.target.dataset.id;
  console.log(event);

  const oldData = Object.values(
    JSON.parse(localStorage.getItem("purchasedCourse"))
  );
  console.log(oldData);

  // localStorage.setItem("items", items);

  // const newData = oldData.filter(
  //   (i) => i.name.split(" ").join("") !== PurchasedCourseID
  // );

  // console.log(newData);

  // const Obj = {};
  // const newObj = newData.map((i) => (Obj[i.idName] = i));

  // console.log(newObj);
}



function switchToPreferedCourse(event) {
  console.log(event.target.id);
  if (event.target.id === "Html_CSS_Course") {
    window.location = "./courses/htmlandcss.html";
  }

  if (event.target.id === "JavaScript_Course") {
    window.location = "./courses/javascript.html";
  }

  if (event.target.id === "C_Plus_Course") {
    window.location = "./courses/c++.html";
  }

  if (event.target.id === "Python_Course") {
    window.location = "./courses/python.html";
  }

  if (event.target.id === "C_Sharp_Course") {
    window.location = "./courses/C_Sharp.html";
  }

  if (event.target.id === "Bootstrap_Course") {
    window.location = "./courses/bootstrap.html";
  }

  if (event.target.id === "React_Course") {
    window.location = "./courses/react.html";
  }

  if (event.target.id === "Angular_Course") {
    window.location = "./courses/angular.html";
  }

}






























