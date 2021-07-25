let products = [
  {
    id: 1,
    name: "HTML and CSS",
    tag: "img1",
    price: 1000,
    inCart: 0,
    idName: "Html_CSS_Course",
  },
  {
    id: 2,
    name: "JavaScript",
    tag: "img2",
    price: 2000,
    inCart: 0,
    idName: "JavaScript_Course",
  },
  {
    id: 3,
    name: "C++",
    tag: "img3",
    price: 2000,
    inCart: 0,
    idName: "C_Plus_Course",
  },
  {
    id: 4,
    name: "Python",
    tag: "img4",
    price: 4000,
    inCart: 0,
    idName: "Python_Course",
  },
  {
    id: 5,
    name: "C#",
    tag: "img5",
    price: 2000,
    inCart: 0,
    idName: "C_Sharp_Course",
  },
  {
    id: 6,
    name: "Bootstrap",
    tag: "img6",
    price: 700,
    inCart: 0,
    idName: "Bootstrap_Course",
  },
  {
    id: 7,
    name: "React.JS",
    tag: "img7",
    price: 4999,
    inCart: 0,
    idName: "React_Course",
  },
  {
    id: 8,
    name: "Angular",
    tag: "img8",
    price: 3999,
    inCart: 0,
    idName: "Angular_Course",
  },
];


/**
 * Get items in localStorage
 */
const getitemsFromLocalStorage = () => {
  const rawObject = JSON.parse(localStorage.getItem('productsInCart')) || {}
  const tagsArray = Object.keys(rawObject)
  const itemsArray = Object.values(rawObject)
  const totalCost = itemsArray.reduce((acc, item) => acc + item.price, 0)
  const totalItems = itemsArray.length

  console.log(rawObject)
  return {
    rawObject,
    tagsArray,
    itemsArray,
    totalItems,
    totalCost
  }
  
}

/**
 * Store products item in localStorage
 * @param {Object} obj item object
 */
function setItemsInLocalStorage(obj) {
  localStorage.setItem('productsInCart', JSON.stringify(obj))
}


/**
 * Add product in localstorage
 * @param {Object} product Object product
 */
function addProductInCart(product) {
  let cartItems = getitemsFromLocalStorage().rawObject
  // console.log(cartItems)

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1
  } else {
    product.inCart = 1
    cartItems = {
      [product.tag]: product
    }
  }

  setItemsInLocalStorage(cartItems)
}

/**
 * Get total numbers of products in cart
 * @returns {Number} Total items in cart
 */
function getTotalItemsInCart() {
  const allProductsArr = getitemsFromLocalStorage().itemsArray
  // console.log(allProductsArr)
  const num = allProductsArr.reduce(
    (acc, item, index, arr) => acc + item.inCart,
    0
  )
  return num
}

/**
 * Show cart items count in UI
 */


function showCartItemsCount() {
  const itemCount = getTotalItemsInCart()
  // console.log(itemCount)
  let cartCount = document.getElementById("cartSpan");
  if (cartCount) {
    cartCount.textContent = itemCount;
  }
  
}

showCartItemsCount()
