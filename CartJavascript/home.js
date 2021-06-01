/**
 * Diasbles buttons of products which are added in cart
 */
 function disableAddedProductBtns() {
  const addedTags = getitemsFromLocalStorage().tagsArray
  if (addedTags.length > 0) {
    for (let index = 0; index < addedTags.length; index++) {
      const tag = addedTags[index]
      const el = document.querySelector(`[data-tag="${tag}"]`)
      if (el) {
        el.disabled = true
        el.innerHTML = 'Added'
      }
    }
  }
}

const addToCartButton = document.getElementsByClassName('addtocartbtn')

disableAddedProductBtns()

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------


/**
 * Event Listner on the add to cart buttons
 */

for (let i = 0; i < addToCartButton.length; i++) {
  const el = addToCartButton[i]
  el.addEventListener('click', (e) => {
    addProductInCart(products[i])
    showCartItemsCount()
    disableAddedProductBtns()
  })
}