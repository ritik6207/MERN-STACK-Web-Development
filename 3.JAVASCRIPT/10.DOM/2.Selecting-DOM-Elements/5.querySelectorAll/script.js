// Select all product cards
const productCardEls = document.querySelectorAll(".product-card");
// console.log(productCardEls);


// Extract and log names of all products
const productNameEls = document.querySelectorAll(".product-name");
// console.log(productNameEls);


productNameEls.forEach((el) => {
    // console.log(el.innerHTML);
})



// Select and log all prices of laptop category products
const laptopPriceEl = document.querySelectorAll(
    "[data-category = 'laptop'] .product-price"
);
// console.log(laptopPriceEl);

laptopPriceEl.forEach((el) => {
    // console.log(el.textContent);
})



// Select all products with a rating above 4.6
const highestRatingEl = document.querySelectorAll(
    '[data-rating = "4.7"], [data-rating = "4.8"]'
)
// console.log(highestRatingEl);
highestRatingEl.forEach(el => console.log(el.innerHTML));