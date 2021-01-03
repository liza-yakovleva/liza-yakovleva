$(document).ready(function () {
  // !add to cart
  let productsCountEl = document.getElementById("products-count");
  let addToCartBtns = document.querySelectorAll(".product-details-add__basket-white");

  for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
      quantityValue[i].value = 1;
    })
  }


  // !change like button state
  document.querySelectorAll('.product-list-item__item-chosen').forEach((element) => {
    element.addEventListener('click', function () {
      this.classList.toggle('item-chosen-click');
    })
  })


  // !modal click on button
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
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    })
  })

  closeBtn.addEventListener("click", closeModal)

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal()
    }
  });


  //! open modal in 50% scroll
  let modalSub = document.querySelector(".modal-sub")
  let closeBtnSub = document.querySelector(".modal-sub-btn-close")

  function closeModalSub() {
    modalSub.classList.remove("modal-sub-show");
    modalSub.classList.add("modal-sub-hide");
  }

  function openModalSub() {
    modalSub.classList.add("modal-sub-show");
    modalSub.classList.remove("modal-sub-hide");
  }

  function showModalByScroll() {
    if (window.pageYOffset > document.documentElement.scrollHeight / 2) {
      openModalSub();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  closeBtnSub.addEventListener("click", closeModalSub);


  //! close modal when click on  place around
  window.addEventListener('click', function (e) {
    if (e.target !== modalSub) {
      closeModalSub()
    }
  });


  // !change product quentity
  let decrementButtons = document.querySelectorAll(".decrement-button");
  let incrementButtons = document.querySelectorAll(".increment-button");
  let quantityValue = document.querySelectorAll(".product-quentity input");
  // let minCount = 1;
  // let maxCount = 5;

  // quantityValue.forEach((item, i) => {
  //   let currentCount = +quantityValue[i].value;
  //   toggleButtonState(currentCount, decrementButtons[i], incrementButtons[i])
  // })

  // function toggleButtonState(count, decrementButton, incrementButton) {
  //   decrementButton.disabled = count <= minCount;
  //   incrementButton.disabled = count >= maxCount;
  // }

  // quantityValue.forEach((item, i) => {
  //   incrementButtons[i].addEventListener("click", function () {
  //     let currentCount = +quantityValue[i].value;
  //     let nextCount = currentCount + 1;
  //     quantityValue[i].value = nextCount;
  //     toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i])
  //   })
  // })

  // quantityValue.forEach((item, i) => {
  //   decrementButtons[i].addEventListener("click", function () {
  //     let currentCount = +quantityValue[i].value;
  //     let nextCount = currentCount - 1;
  //     quantityValue[i].value = nextCount;
  //     toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i])
  //   })
  // })

  //!OPP

  function Counter(incrementButton, decrementButton, inputField, minCount, maxCount) {
    this.domRefs = {
    incrementButton,
    decrementButton,
    inputField,
    }
    this.toggleButtonState = function () {
      let count = +this.domRefs.inputField.value;
      this.domRefs.decrementButton.disabled = count <= minCount;
      this.domRefs.incrementButton.disabled = count >= maxCount;

    }
    this.toggleButtonState();

    this.increment = function () {
       let currentCount = +this.domRefs.inputField.value;
           let nextCount = currentCount + 1;
           this.domRefs.inputField.value = nextCount;
           this.toggleButtonState()
    }
     this.decrement = function () {
       let currentCount = +this.domRefs.inputField.value;
       let nextCount = currentCount - 1;
       this.domRefs.inputField.value = nextCount;
       this.toggleButtonState()
     }
    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this))
     this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this))
}

  let counters = [];
  quantityValue.forEach((count, i) => {
    counters[i] = new Counter(incrementButtons[i], decrementButtons[i], count, 1, 5)
  })

// !slider
  $('.slider-block').slick({
    dots: true,
    arrows: true,
       nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        
       

    
  })



})


