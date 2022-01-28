const products = [
  {
    id: 1,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Columpio adornado",
    img: "./columpio.jpg",
    precio: 970,
    description:
      "Columpio hecho con hilo grueso de algodón. Disponible en varios colores",
  },
  {
    id: 2,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca sencilla",
    img: "./hamaca azul.jpg",
    precio: 1120,
    description:
      "Hamaca hecha en urdido tradicional con hilo grueso de algodón. Disponible en varios colores",
  },
  {
    id: 3,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca Hilos",
    img: "./hamaca hilos.jpg",
    precio: 1520,
    description:
      "Hmaca de telar de algodon con adornos tipo hilo. Unico color.",
  },
  {
    id: 4,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca con orilla tejida",
    img: "./hamaca lol.jpg",
    precio: 1520,
    description: "Hamaca de telar de algodón con adorno tejido. Unico color.",
  },
  {
    id: 5,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca telar sencilla",
    img: "./hamaca sencilla.jpg",
    precio: 1220,
    description: "Hamaca de telar de algodón. Unico color.",
  },
  {
    id: 6,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca picos",
    img: "./hm1.jpg",
    precio: 1720,
    description:
      "Hamaca urdido tradicional con adorno en macrame de picos. Disponible en varios colores.",
  },
  {
    id: 7,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca borlas",
    img: "./hm2.jpg",
    precio: 2120,
    description:
      "Hamaca urdido tradicional con adorno de borlas. Disponible en varios colores.",
  },
  {
    id: 8,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca arcos",
    img: "./hm3.jpg",
    precio: 2120,
    description:
      "Hamaca urdido tradicional con adorno en macrame de arcos. Disponible en varios colores.",
  },
  {
    id: 9,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca telar picos",
    img: "./hmp1.jpg",
    precio: 1560,
    description:
      "Hamaca de telar de algodón con adorno tejido de picos. Unico color.",
  },
  {
    id: 10,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca telar de colores",
    img: "./IMG_4750.jpg",
    precio: 1120,
    description: "Hamaca de telar de nylon. Unico color.",
  },
  {
    id: 11,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Hamaca sencilla (Nylon)",
    img: "./nylon col2.jpg",
    precio: 1220,
    description:
      "Hamaca hecha en urdido tradicional. Disponible en varios colores",
  },
  {
    id: 12,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Silla colgante",
    img: "./silla.jpg",
    precio: 1450,
    description:
      "Silla colgante hecha con hilo grueso de algodón. Disponible en varios colores",
  },
  {
    id: 13,
    category: "Urdido Tradicional (Algodon)",
    titulo: "Silleta de madera",
    img: "./silleta 1.jpg",
    precio: 1500,
    description:
      "Silleta de madera e hilo de algodón. Disponible en varios colores",
  },
];

const categoryGrid = document.querySelector(".productos");

window.addEventListener("DOMContentLoaded", () => {
  let displayCategories = products.map((item) => {
    return `
    <div class="category-card">
    <a data-id=${item.id} class="category-card-title">${item.titulo}</a>
    <img class="category-img" src="${item.img}" alt="">
      <div class="description-price">
        <div class="description">${item.description}</div>
        <div class="price">$${item.precio}</div>
      </div>
      <button class="shop-btn">Lo quiero!</button>
    </div>
  </div>
  </div>
      `;
  });
  displayCategories = displayCategories.join("");
  categoryGrid.innerHTML = displayCategories;
});

const shopingCart = document.querySelector(".shopping-cart-btn");
const modal = document.querySelector("#myModal");
const closeModalBtn = document.querySelector(".close-modal");

shopingCart.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//CARRITO

class Carrito {
  comprarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("shop-btn")) {
      const producto = e.target.parentElement;
      this.leerDatosProducto(producto);
      console.log(producto);
    }
  }

  leerDatosProducto(producto) {
    const infoProducto = {
      img: producto.querySelector("img").src,
      title: producto.querySelector(".category-card-title").textContent,
      precio: producto.querySelector(".price").textContent,
      id: producto
        .querySelector(".category-card-title")
        .getAttribute("data-id"),
    };
    this.insertarCarrito(infoProducto);
  }

  insertarCarrito(infoProducto) {
    const addedItems = [...document.querySelectorAll(".cart-item-title")];
    const itemTitles = addedItems.map((item) => {
      return item.textContent;
    });
    if (itemTitles.includes(infoProducto.title)) {
      alert("Este producto ya esta en el carrito");
    } else {
      const cartItem = ` <div class="cart-row">
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${infoProducto.img}" width="100" height="100">
        <span class="cart-item-title" data-id=${infoProducto.id}>${infoProducto.title}</span>
      </div>
        <span class="cart-price cart-column">${infoProducto.precio}</span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
   </div>`;
      const cartItemContainer = document.querySelector(".cart-items");
      cartItemContainer.insertAdjacentHTML("beforeend", cartItem);
      alert("El producto se ha agregado al carrito");
      addToLocalStorage(infoProducto);
    }
  }
}

const carro = new Carrito();

function cargarEventos() {
  categoryGrid.addEventListener("click", (e) => {
    carro.comprarProducto(e);
    updateCartTotal();
    handleInputChange();
    removeItem();
  });
}
cargarEventos();

//Funcionalidad carrito

function updateCartTotal() {
  const itemContainer = document.querySelector(".cart-items");
  const items = itemContainer.querySelectorAll(".cart-row");
  const totalDiv = document.querySelector(".cart-total-price");
  let total = 0;

  items.forEach((item) => {
    const priceElement = item.querySelector(".cart-price");
    const quantityElement = item.querySelector(".cart-quantity-input");

    const price = parseFloat(priceElement.textContent.slice(1));
    const quantity = quantityElement.value;
    const totalRow = price * quantity;
    total += totalRow;
  });
  totalDiv.textContent = `$${total}`;
}

function handleInputChange() {
  const quantityElement = document.querySelectorAll(".cart-quantity-input");
  quantityElement.forEach((item) => {
    item.addEventListener("change", () => {
      if (isNaN(item.value) || item.value <= 0) {
        item.value = 1;
      }
      updateCartTotal();
    });
  });
}

function removeItem() {
  const dltBtn = document.querySelectorAll(".btn-danger");

  dltBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const row = e.target.parentElement.parentElement;
      const cartItemContainer = document.querySelector(".cart-items");
      cartItemContainer.removeChild(row);
      updateCartTotal();
      deleteLocalStorage(row);
    });
  });
}

//Local Storage

function addToLocalStorage(infoProducto) {
  const shopItem = {
    img: infoProducto.img,
    title: infoProducto.title,
    precio: infoProducto.precio,
    id: infoProducto.id,
  };
  let items = getLocalStorage();
  items.push(shopItem);
  localStorage.setItem("shop-cart", JSON.stringify(items));
}

function deleteLocalStorage(row) {
  const id = row.querySelector(".cart-item-title").getAttribute("data-id");
  let items = getLocalStorage();
  items = items.filter((item) => item.id !== id);
  localStorage.setItem("shop-cart", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("shop-cart")
    ? JSON.parse(localStorage.getItem("shop-cart"))
    : [];
}

//Setup cart

window.addEventListener("DOMContentLoaded", () => {
  items = getLocalStorage();
  items.forEach((item) => {
    const cartItem = ` <div class="cart-row">
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${item.img}" width="100" height="100">
        <span class="cart-item-title" data-id=${item.id}>${item.title}</span>
      </div>
        <span class="cart-price cart-column">${item.precio}</span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
   </div>`;
    const cartItemContainer = document.querySelector(".cart-items");
    cartItemContainer.insertAdjacentHTML("beforeend", cartItem);
  });
  updateCartTotal();
  handleInputChange();
  removeItem();
});
