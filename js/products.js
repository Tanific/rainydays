const baseUrl = "https://rainydaysapi.tanific.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");
const categories = document.querySelectorAll(".category");
const resistances = document.querySelector(".resistance");

/* products.html page display */
async function getProducts(url){
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function(product){
    productContainer.innerHTML += `
    <a href="../rainydays/products/itemspecific-raincoat.html?id=${product.id}"><div class="product"><h2>${product.name}</h2>
      <img src="${product.images[0].thumbnail}"/>
      <div class="product-description-short">${product.short_description}</div>
      <div class="product-price">${product.prices.price}kr</div>
    </div></a>`
  })
}

getProducts(baseUrl);

/* ultra(featured) and categories organizer */
categories.forEach(function(category){
  category.onclick = function(event){
    let newUrl;
    if (event.target.id === "featured"){
      newUrl = baseUrl + "?featured=true";
    }
    else {
      const categoryChosen = event.target.value;
      newUrl = baseUrl + `?category=${categoryChosen}`
    }
    productContainer.innerHTML = "";
    getProducts(newUrl);
  }
})

/* resistance organizer */
resistances.onchange = function(event){
  const newUrl = baseUrl + `?category=${event.target.value}`;
  productContainer.innerHTML = "";
  getProducts(newUrl);
}