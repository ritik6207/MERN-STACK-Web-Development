// Using setAttribute to change product images
const productImageEl = document.getElementById("product1").querySelector("img");

console.log(productImageEl);

productImageEl.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
);

productImageEl.setAttribute("alt", "my new product");

// Using setAttribute to change product links
const productLinksEl = document.getElementById("product1").querySelector("a");

productLinksEl.setAttribute("href", "new.html");

console.log(productLinksEl);