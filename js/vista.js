// ======= OBTENEMOS EL CODIGO DEL PRODUCTOS =======
const params = new URLSearchParams(window.location.search);
const codigoP = params.get("code");
// ======= ZONA DE LA VISTA DE PRODUCTO =======
const vistaNoCode = document.querySelector(".vista-noCode");
const vistaProducto = document.querySelector(".vista-producto");
const vp_btnPlus = document.querySelector(".plus");
const vp_btnMinus = document.querySelector(".minus");
const vp_inputCantidad = document.getElementById("fvp-cantidad");
const vp_carrusel = document.querySelector(".vp-cimg");
const vp_prevBtn = document.querySelector(".vp-prev");
const vp_nextBtn = document.querySelector(".vp-next");
let valor;
// ======= ZONA DE VISTA DE SUGERENCIA =======
const vs_title = document.querySelector(".vs-title");
const vs_carruselItems = document.querySelector(".vs-carrusel-items");
const vs_btnPrev = document.querySelector('.vs-prev');
const vs_btnNext = document.querySelector('.vs-next');
const vs_carrusel = document.querySelector('.vs-carrusel');
let index = 0;
let intervalo = null;
let totalItems = 0;


// ======= ZONA DE COMPRA AGREGANDO AL CARRITO =======
const agregar_carrito = document.querySelector('.vp-comprar');

// ======= FUNCIONES PRINCIPALES =======
function visible(elemento, clase) {
    elemento.classList.add(`${clase}--show`);
}
function ocultar(elemento, clase) {
    elemento.classList.remove(`${clase}--show`);
}
function vista(valorelemento, valorclas) {
    if (!valorelemento) {
        ocultar(valorclas, valorclas.classList[0]); 
    } else {
        visible(valorclas, valorclas.classList[0]);
    }
}
// SI PASALA CONDICCION -- Cargar Producto --
const code = productos.find(prod => prod.Codigo === codigoP);
if (!code) {
    ocultar(vistaProducto, "vista-producto");
    visible(vistaNoCode, "vista-noCode");
    simularesOestado(false); 
} else {
    visible(vistaProducto, "vista-producto");
    ocultar(vistaNoCode, "vista-noCode");
    cargarProducto();
    simularesOestado(true); 
}

// ======= ZONA DE LA VISTA DE PRODUCTO =======
function cargarProducto() {
    const productoSeleccionado = productos.find(prod => prod.Codigo === codigoP);
    
    // Mostrar u ocultar campos
    vista(productoSeleccionado.Talle, document.querySelector(".vp-input-talle"));
    vista(productoSeleccionado.Color, document.querySelector(".vp-input-color"));

    // Cambiar label según categoría
    const labelTipoMedida = document.getElementById("fvp-label-talle");
    labelTipoMedida.textContent = productoSeleccionado.TipoMedida
    // Selects
    const vp_selectTalle = document.getElementById("fvp-talle");
    const vp_selectColor = document.getElementById("fvp-color");
    vp_selectTalle.innerHTML = "";
    vp_selectColor.innerHTML = "";
    if (productoSeleccionado.Talle) {
        (Array.isArray(productoSeleccionado.Talle) ? productoSeleccionado.Talle : [productoSeleccionado.Talle])
        .forEach(t => {
            const opt = new Option(t, t);
            vp_selectTalle.appendChild(opt);
        });
    }
    if (productoSeleccionado.Color) {
        (Array.isArray(productoSeleccionado.Color) ? productoSeleccionado.Color : [productoSeleccionado.Color])
        .forEach(c => {
            const opt = new Option(c, c);
            vp_selectColor.appendChild(opt);
        });
    }
    // Nombre y descripción
    document.getElementById("vp-nombre").textContent = productoSeleccionado.Producto || "";
    document.getElementById("vp-Descripcion").textContent = productoSeleccionado.Descripcion?.trim() || productoSeleccionado.Producto;
    // Precio y cantidad
    const vp_tienePrecio = (productoSeleccionado.Precio && productoSeleccionado.Precio > 0);
    document.getElementById("vp-precio").textContent = vp_tienePrecio ? `${productoSeleccionado.Precio}$` : "Consultar Precio";
    vista(vp_tienePrecio, document.querySelector(".vp-input-cant"));

    // Imágenes del producto
    const productoselecImgs = TodasImg.find(item => item.codigo === codigoP);
    // Dentro de cargarProducto()
    let imgIndex = 0;
    function mostrarImagen() {
        if (productoselecImgs?.Imagenes.length > 0) {
            vp_carrusel.innerHTML = `<img src="img/${productoselecImgs.Imagenes[imgIndex]}.jpg" alt="Imagen ${codigoP}">`;
        } else {
            vp_carrusel.innerHTML = `<p>Sin imágenes disponibles</p>`;
        }
    }
    vp_nextBtn.addEventListener("click", () => {
        if (!productoselecImgs) return;
        imgIndex = (imgIndex + 1) % productoselecImgs.Imagenes.length;
        mostrarImagen();
    });
    vp_prevBtn.addEventListener("click", () => {
        if (!productoselecImgs) return;
        imgIndex = (imgIndex - 1 + productoselecImgs.Imagenes.length) % productoselecImgs.Imagenes.length;
        mostrarImagen();
    });
    mostrarImagen();
}
vp_btnMinus.addEventListener("click", () => {
    valor = parseInt(vp_inputCantidad.value) || 1;
    if (valor > 1) vp_inputCantidad.value = valor - 1;
});
vp_btnPlus.addEventListener("click", () => {
    valor = parseInt(vp_inputCantidad.value) || 1;
    vp_inputCantidad.value = valor + 1;
});




// ======= ZONA DE VISTA DE SUGERENCIA =======
function simularesOestado(esPorCategoria) {
    if (esPorCategoria) {
        const pActual = productos.find(p => p.Codigo === codigoP);
        const categoría = pActual.Categoria;
        const ProCategoría = productos.filter(p => p.Categoria === categoría);
        vs_title.textContent = "Productos similares";
        mostraP(ProCategoría);
    } else {
        const ProSugeridos = productos.filter(p => p.Estado);
        vs_title.textContent = "Productos sugeridos";
        mostraP(ProSugeridos);
    }
}

function mostraP(prodMostrar){
    vs_carruselItems.innerHTML = ""; // Limpio antes de agregar
    prodMostrar.forEach(sprod => {
        const enlace = document.createElement("a");
        enlace.href = `producto.html?code=${encodeURIComponent(sprod.Codigo)}`;
        enlace.classList.add("vs-c-producto");

        enlace.innerHTML = `
            <div class="vs-Presentacion">
                <img src="img/${sprod.Img}.jpg" alt="${sprod.Producto}">
            </div>
            <div class="vs-Texto">
                <h4>${sprod.Producto}</h4>
                <p>${sprod.Precio ? `$${sprod.Precio}` : "Consultar precio"}</p>
            </div>
        `;
        vs_carruselItems.appendChild(enlace);
    });

    totalItems = prodMostrar.length;
    index = 0;
    actualizarCarrusel();
}

function actualizarCarrusel() { 
    const primerProducto = vs_carruselItems.querySelector('.vs-c-producto');
    if (!primerProducto) return;
    const anchoProducto = primerProducto.offsetWidth;
    vs_carruselItems.style.transform = `translateX(-${index * anchoProducto}px)`;
}

function siguiente() { 
    if (totalItems === 0) return;
    index = (index + 1) % totalItems;
    actualizarCarrusel();
}

function anterior() {
    if (totalItems === 0) return;
    index = (index - 1 + totalItems) % totalItems;
    actualizarCarrusel();
}

vs_btnNext.addEventListener('click', siguiente);
vs_btnPrev.addEventListener('click', anterior);

function iniciarAutoSlide() {
    detenerAutoSlide();
    intervalo = setInterval(siguiente, 9000);
}

function detenerAutoSlide() {
    clearInterval(intervalo);
}

vs_carrusel.addEventListener('mouseenter', detenerAutoSlide);
vs_carrusel.addEventListener('mouseleave', iniciarAutoSlide);

// Swipe táctil
let startX = 0;
let endX = 0;
vs_carruselItems.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
vs_carruselItems.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});
vs_carruselItems.addEventListener('touchend', () => {
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            siguiente();
        } else {
            anterior();
        }
    }
    iniciarAutoSlide();
});

iniciarAutoSlide();


// ======= ZONA DE COMPRA AGREGANDO AL CARRITO =======
// Función para agregar al carrito
function agregarAlCarrito(event) {
    event.preventDefault(); // Evita redirecciones o recargas

    // Capturar datos del formulario
    const codigo = params.get("code");
    const productoSeleccionado = productos.find(prod => prod.Codigo === codigo);

    // Si no existe el producto, abortamos
    if (!productoSeleccionado) {
        console.warn("❌ No se encontró el producto.");
        return;
    }

    // Talle y Color solo si existen en el producto
    const talle = productoSeleccionado.Talle ? document.getElementById("fvp-talle").value : null;
    const color = productoSeleccionado.Color ? document.getElementById("fvp-color").value : null;

    // Cantidad siempre debe existir y ser > 0
    const cantidad = parseInt(document.getElementById("fvp-cantidad").value);

    if (cantidad <= 0 || !codigo) {
        console.warn("⚠️ Por favor selecciona una cantidad válida.");
        return;
    }

    // Leer carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Buscar coincidencia (comparar solo talle y color si existen)
    const index = carrito.findIndex(item => 
        item.Codigo === codigo &&
        (productoSeleccionado.Talle ? item.Talle === talle : true) &&
        (productoSeleccionado.Color ? item.Color === color : true)
    );

    if (index !== -1) {
        // Ya existe -> actualizar cantidad
        carrito[index].Cantidad += cantidad;
        console.log(`🔄 Cantidad actualizada: ${carrito[index].Cantidad}`, carrito[index]);
    } else {
        // Crear nuevo objeto para carrito
        const nuevoItem = {
            Codigo: codigo,
            Talle: productoSeleccionado.Talle ? talle : null,
            Color: productoSeleccionado.Color ? color : null,
            Cantidad: cantidad
        };
        carrito.push(nuevoItem);
        console.log("✅ Producto agregado al carrito:", nuevoItem);
    }

    // Guardar carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
}
// Asignar evento al botón
agregar_carrito.addEventListener("click", agregarAlCarrito);