const carrito = [];
const container = document.querySelector("div.container");

const activarBotonesAdd = () => {
  const botonesAdd = document.querySelectorAll(".button.button-outline.button-add");
  botonesAdd.forEach((btn) => btn.addEventListener("click", (e) => agregarAlCarrito(e)));
};

const cargarMisProductos = () => {
  container.innerHTML = "";
  productos.forEach((producto) => (container.innerHTML += retornoCard(producto)));
  activarBotonesAdd();
};
cargarMisProductos();

const agregarAlCarrito = (e) => {
  let resultado = productos.find((prod) => prod.nombre === e.target.id);
  if (resultado !== undefined) {
    carrito.push(resultado);
    guardarCarrito();
    console.clear();
    console.table(carrito);
  }
};

const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    carritoRecuperado.forEach((producto) => carrito.push(producto));
  } else {
    console.warn("No se encontró un carrito previamente guardado.");
  }
};
recuperarCarrito;
