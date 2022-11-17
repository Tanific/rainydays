const baseUrl = "https://rainydaysapi.tanific.one/wp-json/wc/store/products?_embed"
const productContainer = document.querySelector(".products")

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function(product){
    productContainer.innerHTML += `
    <div class="product"><h2>${product.name}</h2>
      <img src="${product.images[0].thumbnail}"/>
      <div class="product-description-short">${product.short_description}</div>
      <div class="product-price">${product.prices.price}kr</div>
    </div>`
  })
}

getProducts(baseUrl);

