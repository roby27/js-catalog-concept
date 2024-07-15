let toggleTemaElement = document.getElementById("toggletema");
let htmlElement = document.documentElement;

toggleTemaElement.addEventListener("click", function () {
  let tema = htmlElement.getAttribute("data-bs-theme");
  if (tema === "light") {
    htmlElement.setAttribute("data-bs-theme", "dark");
    toggleTemaElement.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  } else {
    htmlElement.setAttribute("data-bs-theme", "light");
    toggleTemaElement.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
});

const catalogElement = document.getElementById("catalog");
const availableFilterElement = document.getElementById("availableFilter");
const discountFilterElement = document.getElementById("discountFilter");

const prodotti = [
  {
    name: "Scarpe Nike",
    description: "Just do it.",
    price: 129.9,
    imgUrl: "./img/scarpe-nike.jpg",
    productUrl: "#",
    available: false,
    new: true,
    isDiscounted: true,
    discountPrice: 99.99,
  },
  {
    name: "Maglia Adidas",
    description: "Three stripes are better than two.",
    price: 69.9,
    imgUrl: "./img/maglia-adidas.jpg",
    productUrl: "#",
    available: true,
    new: false,
    isDiscounted: false,
    discountPrice: 99.99,
  },
  {
    name: "Zaino Puma",
    description: "Like a Jaguar, but not that fast.",
    price: 49.9,
    imgUrl: "./img/zaino-puma.jpg",
    productUrl: "#",
    available: false,
    new: true,
    isDiscounted: true,
    discountPrice: 39.99,
  },
  {
    name: "Maglia AGG",
    description: "A volte dorme più lo sveglio che il dormiente.",
    price: 29.9,
    imgUrl: "./img/maglia-agg.jpg",
    productUrl: "#",
    available: true,
    new: true,
    isDiscounted: false,
    discountPrice: 99.99,
  },
  {
    name: "Prodotto 1",
    description: "Descrizione prodotto 1.",
    price: 39.9,
    imgUrl: "https://placehold.co/300",
    productUrl: "#",
    available: true,
    new: false,
    isDiscounted: true,
    discountPrice: 29.99,
  },
  {
    name: "Prodotto 2",
    description: "Descrizione prodotto 2.",
    price: 59.9,
    imgUrl: "https://placehold.co/300",
    productUrl: "#",
    available: true,
    new: false,
    isDiscounted: false,
    discountPrice: 99.99,
  },
  {
    name: "Prodotto 3",
    description: "Descrizione prodotto 3.",
    price: 19.9,
    imgUrl: "https://placehold.co/300",
    productUrl: "#",
    available: false,
    new: true,
    isDiscounted: false,
    discountPrice: 99.99,
  },
  {
    name: "Prodotto 4",
    description: "Descrizione prodotto 4.",
    price: 9.9,
    imgUrl: "https://placehold.co/300",
    productUrl: "#",
    available: false,
    new: false,
    isDiscounted: true,
    discountPrice: 7.99,
  },
  {
    name: "Prodotto 5",
    description: "Descrizione prodotto 5.",
    price: 99.9,
    imgUrl: "https://placehold.co/300",
    productUrl: "#",
    available: true,
    new: false,
    isDiscounted: false,
    discountPrice: 99.99,
  },
];

function displayProducts(prodotti) {
  catalogElement.innerHTML = "";
  prodotti.forEach(function (element) {
    const name = element.name;
    const description = element.description;
    let price = element.price;
    const imgUrl = element.imgUrl;
    const productUrl = element.productUrl;
    let isNew = element.new;
    let available = element.available;
    let isDiscounted = element.isDiscounted;
    let discountPrice = element.discountPrice;
    let displayPrice = "";

    if (available === true) {
      available =
        '<i class="bi bi-check-circle-fill text-success"></i> Disponibile';
    } else {
      available =
        '<i class="bi bi-exclamation-circle-fill text-danger"></i> Non disponibile';
    }

    let newBadge = '<span class="badge text-bg-danger">NEW</span>';
    let discountBadge = '<span class="badge text-bg-warning">IN SCONTO</span>';

    if (isNew === false) {
      newBadge = "";
    }

    if (isDiscounted === false) {
      discountBadge = "";
      displayPrice = `<span>${price.toFixed(2)}€</span>`;
    } else {
      displayPrice = `<span class="text-decoration-line-through">${price.toFixed(
        2
      )}€</span> <span class="fw-bold">${discountPrice.toFixed(2)}€</span>`;
    }

    const html = `
        <div class="col-lg-4 col-md-6 py-3">
             <div class="card">
                 <img src="${imgUrl}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${name} ${newBadge} ${discountBadge}</h5>
                     <p class="card-text">${description}</p>
                 </div>
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item"><strong>Prezzo</strong>: ${displayPrice}</li>
                     <li class="list-group-item text-center">
                        <a href="${productUrl}" class="btn btn-success"><i class="bi bi-cart-check"></i> Compra subito</a> 
                        <a href="${productUrl}" class="btn btn-info"><i class="bi bi-cart-plus"></i> Aggiungi al carrello</a>
                    </li>
                 </ul>
                 <div class="card-footer">
                    <small class="text-body-secondary">${available}</small>
                 </div>
             </div>
         </div>
    `;
    catalogElement.innerHTML += html;
  });
}

function filterProducts() {
  let showAvailable = availableFilterElement.checked;
  let showDiscounted = discountFilterElement.checked;

  let filteredProducts = prodotti.filter(function (prodotto) {
    if (showAvailable === true && prodotto.available === false) {
      return false;
    } else if (showDiscounted === true && prodotto.isDiscounted === false) {
      return false;
    } else {
      return true;
    }
  });

  displayProducts(filteredProducts);
}

availableFilterElement.addEventListener("change", filterProducts);
discountFilterElement.addEventListener("change", filterProducts);

displayProducts(prodotti);
