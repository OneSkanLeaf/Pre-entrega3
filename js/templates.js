//TEMPLATES PARA ARMAR ESTRUCTURAS HTML CON JAVASCRIPT
const retornoCard = (producto) => {
  return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">$ ${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.nombre}" title="Clic para agregar el '${producto.nombre}' al carrito">+</button>
                </div>
            </div>`;
};

const retornoError = () => {
  return `<div class="card-error">
            <h2>Hubo un problema al cargar los productos </h2>
            <h3>Intente nuevamente</h3>
        </div>`;
};
