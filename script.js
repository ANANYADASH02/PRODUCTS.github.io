document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
   
    const products = [
    { name: "King Size Bed ", price: "Rs:18,690", image: "bed.webp" },
    { name: "Bean Bag", price: "Rs:1,999", image: "beanbag.webp" },
    { name: "Cabinet", price: "Rs:5,599", image: "cabinets.webp" },
    { name: "Dining Table", price: "Rs:8,999", image: "dining.webp"},
    { name: "Gaming Chair", price: "Rs:9,390", image: "gamingchair.webp" },
    { name: "Seat Sofa", price: "Rs:13,899", image: "seatsofa.webp" },
    ];
   
    products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
   
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
   
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
   0
    const priceElement = document.createElement("p");
    priceElement.textContent = product.price;
   
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
   
    productsList.appendChild(productElement);
    });
   
    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
   
    scrollToProductsLink.addEventListener("click", function (event) {
    event.preventDefault();
   
    featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
    });