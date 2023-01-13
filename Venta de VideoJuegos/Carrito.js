let productosEnCarrito = localStorage.getItem("productos-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
const carritoVacio = document.querySelector("#carrito-vacio");
const contentProductos = document.querySelector("#carrito-productos");
const carritoOption = document.querySelector("#carrito-option");

let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#accion-vaciar");
const total = document.querySelector("#Total");
const botonComprar = document.querySelector("#accion-comprar");

function cargarProductosCarrito() {
    if (productosEnCarrito && 0 < productosEnCarrito.length) {
        carritoVacio.classList.add("disable");
        contentProductos.classList.remove("disable");
        carritoOption.classList.remove("disable");
    
        contentProductos.innerHTML = "";
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                    <img src="${producto.imagen}" class="img-producto">
                    <div class="carrito-prodcuto-titulo">
                        <small>NOMBRE</small>
                        <h3>${producto.titulo}</h3>
                    </div>
                    <div class="carrito-producto-cant">
                        <small>CANTIDAD</small>
                        <h3>${producto.cantidad}</h3>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>PRECIO</small>
                        <h3>$${producto.precio}</h3>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>SUBTOTAL</small>
                        <h3>$${producto.precio * producto.cantidad}</h3>
                    </div>
                    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-x-circle-fill"></i></button>
            `;
            
            contentProductos.append(div);
        });
    
    } else{
    
        carritoVacio.classList.remove("disable");
        contentProductos.classList.add("disable");
        carritoOption.classList.add("disable");
    }

    actualizarBotonEliminar();
    actualizarTotal()
}

cargarProductosCarrito();

function actualizarBotonEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    let idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    console.log(productosEnCarrito);
    cargarProductosCarrito();

    localStorage.setItem("productos-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click",vaciarCarrito);
function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

botonComprar.addEventListener("click",vaciarComprar);
function vaciarComprar() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
    alert("COMPRA REALIZADA CON EXITO");
}

function actualizarTotal() {
    total.innerText = productosEnCarrito.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad),0);
}
