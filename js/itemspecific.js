const itemspecificContainer = document.querySelector(".itemspecific-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url = "https://rainydaysapi.tanific.one/wp-json/wc/store/products/" + id;
console.log(url)

async function fetchProduct() {

    const response = await fetch(url);
    const itemspecific = await response.json();

    console.log(itemspecific);

    createHTML(itemspecific);

}

fetchProduct();

function createHTML(itemspecific) {
    itemspecificContainer.innerHTML = `<h2>${itemspecific.name}</h2>
    <img src="${itemspecific.images[0].thumbnail}"/>
    <p class="itemspecific-description">${itemspecific.description}</p>
    <p class="categories-info">${itemspecific.prices.price}kr</p>
    <div class="itemspecific-links">
    <a href="../products.html" class="backbtn">Go back</a>
    <a href="../cart.html" class="cta">Add to cart</a>
    </div>`
}