let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".product-details-add__basket-white");
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductCount + 1;


    
    // productsCountEl.textContent= +productsCountEl.textContent + 1;
  })
}


document.querySelectorAll('.product-list-item__item-chosen').forEach((element) => {
  element.addEventListener('click', function () {
    this.classList.toggle('item-chosen-click');
  })
})