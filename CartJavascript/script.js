let products = [
  {
    name: 'HTML and CSS',
    tag: 'img1',
    price: 1000,
    inCart: 0
  },
  {
    name: 'JavaScript',
    tag: 'img2',
    price: 2000,
    inCart: 0
  },
  {
    name: 'C++',
    tag: 'img3',
    price: 2000,
    inCart: 0
  },
  {
    name: 'Python',
    tag: 'img4',
    price: 4000,
    inCart: 0
  },
  {
    name: 'C#',
    tag: 'img5',
    price: 2000,
    inCart: 0
  },
  {
    name: 'Bootstrap',
    tag: 'img6',
    price: 700,
    inCart: 0
  },
  {
    name: 'React.JS',
    tag: 'img7',
    price:4999,
    inCart: 0
  },
  {
    name: 'Angular',
    tag: 'img8',
    price:3999,
    inCart: 0
  }
]


/**
 * Get items in localStorage
 */
const getitemsFromLocalStorage = () => {
  const rawObject = JSON.parse(localStorage.getItem('productsInCart')) || {}
  const tagsArray = Object.keys(rawObject)
  const itemsArray = Object.values(rawObject)
  const totalCost = itemsArray.reduce((acc, item) => acc + item.price, 0)
  const totalItems = itemsArray.length
  // console.log(itemsArray);

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

  // localStorage.setItem('productsInCart', JSON.stringify(cartItems))
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
