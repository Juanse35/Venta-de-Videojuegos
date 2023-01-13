const productos = [
    {   
        id: "Producto-01",
        titulo: "SONIC FRONTIER",
        imagen: "Material/Img1.jpg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },

    {   
        id: "Producto-02",
        titulo: "GOD OF WAR",
        imagen: "Material/Img2.jpeg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },

    {   
        id: "Producto-03",
        titulo: "GOTHAM KNIGHTS",
        imagen: "Material/Img3.jpeg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },


    {   
        id: "Producto-04",
        titulo: "EVIL WEST",
        imagen: "Material/Img4.jpg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },

    {   
        id: "Producto-05",
        titulo: "CALL OF DUTY",
        imagen: "Material/Img5.jpg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },

    {   
        id: "Producto-06",
        titulo: "THE CALLISTO",
        imagen: "Material/Img6.jpeg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },

    {   
        id: "Producto-07",
        titulo: "POKEMON",
        imagen: "Material/Img7.jpg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },

    {   
        id: "Producto-08",
        titulo: "METAL HELLISINGER",
        imagen: "Material/Img8.jpeg",
        categoria:{
            nombre:"ULTIMOS LANZAMIENTOS",
            id:"Recientes"
        },
        precio: 120000
    },

    {   
        id: "Producto-09",
        titulo: "HOLLOW KNIGHT",
        imagen: "Material/Img9.jpg",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-10",
        titulo: "BLASPHEMOUS",
        imagen: "Material/Img10.jpg",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-11",
        titulo: "UNDERTALE",
        imagen: "Material/Img11.jpg",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-12",
        titulo: "MINECRAFT",
        imagen: "Material/Img12.jpg",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-13",
        titulo: "GTA V",
        imagen: "Material/Img13.jpg",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-14",
        titulo: "THE SIMS 4",
        imagen: "Material/Img14.png",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-15",
        titulo: "MORTAL KOMBAT",
        imagen: "Material/Img15.jpg",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-16",
        titulo: "SUPER SMASH BROS",
        imagen: "Material/Img16.jfif",
        categoria:{
            nombre:"JUEGOS DESTACADOS",
            id:"Destacados"
        },
        precio: 120000
    },

    {   
        id: "Producto-17",
        titulo: "SUPER MARIO 3",
        imagen: "Material/Img17.jpg",
        categoria:{
            nombre:"JUEGOS CLASICOS",
            id:"Clasicos"
        },
        precio: 120000
    },

    {   
        id: "Producto-18",
        titulo: "SONIC MANIA",
        imagen: "Material/Img18.jpg",
        categoria:{
            nombre:"JUEGOS CLASICOS",
            id:"Clasicos"
        },
        precio: 120000
    },

    {   
        id: "Producto-19",
        titulo: "DOOM",
        imagen: "Material/Img19.jpg",
        categoria:{
            nombre:"JUEGOS CLASICOS",
            id:"Clasicos"
        },
        precio: 120000
    },

    {   
        id: "Producto-20",
        titulo: "CONTRA",
        imagen: "Material/Img20.jfif",
        categoria:{
            nombre:"Clasicos",
            id:"Clasicos"
        },
        precio: 120000
    }
];




const contentProductos = document.querySelector("#content-productos");
const botonesCategorias = document.querySelectorAll(".button-category");
const tituloPrincipal = document.querySelector("#title-principal");
let botonAgregar = document.querySelectorAll(".button-1");
const numero = document.querySelector("#numero");

function cargarProductos(productosElegidos){
    
    contentProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="card">
            <img src="${producto.imagen}" class="img">
            <div class="info-producto">
                <h3 class="subtitle">${producto.titulo}</h3>
                <h3 class="subtitle">$${producto.precio}</h3>
                <button class="button-1" id="${producto.id}" >AGREGAR AL CARRITO</button>
            </div>
        </div>
        `;

        contentProductos.append(div);
    })

    actualizarBotonAgregar();
}



cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "Todos") {
            const productosCategory = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategory.categoria.nombre;

            const productosCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosCategoria);
        } else {
            tituloPrincipal.innerText = "TODOS LOS PRODUCTOS";
            cargarProductos(productos);
        }  
    });
});

function actualizarBotonAgregar() {
    botonAgregar = document.querySelectorAll(".button-1");
    
    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    });
}

let productosCarrito;

let productosCarritoLS = localStorage.getItem("productos-carrito");

if (productosCarritoLS) {
    productosCarrito = JSON.parse(productosCarritoLS);
    actualizarNumero();
}else{
    productosCarrito = [];
}



function agregarCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productosAgregados = productos.find(producto => producto.id === idBoton);

    if (productosCarrito.some(producto => producto.id === idBoton)) {
       const index = productosCarrito.findIndex(producto => producto.id === idBoton);
       productosCarrito[index].cantidad++;
    } else {

        productosAgregados.cantidad = 1;
        productosCarrito.push(productosAgregados);
    }

    actualizarNumero();
    localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
}

function actualizarNumero() {
    let nuevoNumero = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerHTML = nuevoNumero;
}