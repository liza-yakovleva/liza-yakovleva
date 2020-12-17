// !add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".product-details-add__basket-white");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductCount + 1;
    // productsCountEl.textContent= +productsCountEl.textContent + 1;
  })
}

// !change like button state

document.querySelectorAll('.product-list-item__item-chosen').forEach((element) => {
  element.addEventListener('click', function () {
    this.classList.toggle('item-chosen-click');
  })
})


// !modal


let moreDetailsBtns = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn-close")

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}
function openModal() {
   modal.classList.add("show");
   modal.classList.remove("hide");
}
moreDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    openModal();
  })
})

closeBtn.addEventListener("click", closeModal)