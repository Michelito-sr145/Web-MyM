emailjs.init("m2TiZgiU2f969EkXE");
const contenedorCarrito = document.querySelector(".Carro");
const seccionVacia = document.querySelector(".vacio");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ======= ZONA DE REALIZAR EL PEDIDO =======
const compraModal = document.querySelector(".Compra-Modal");
const opcion = document.querySelector(".opcion");
const btnRetrocederwps = document.querySelector(".atras-wsp")
const btnRetrocederemail = document.querySelector(".atras-email")
// WhatsApp
const confirmacionWsp = document.querySelector(".confirmacion-wsp");
const btnWhatsApp = document.getElementById("msj-wsp");
const btnReenviarWsp = document.querySelector(".reenviar-wsp");
const btnCerrarConfiWsp = document.querySelector(".cerrar-confi-wsp");
// Email
const btnEmail = document.getElementById("msj-email");
const formEmail = document.querySelector(".form-email");
const confirmacionEmail = document.querySelector(".confirmacion-email");
const formulario = document.getElementById("formulario");
const estadoEmail = document.querySelector(".estado");
const btnCerrarConfiEmail = document.querySelector(".cerrar-confi-email");

document.getElementById("btn-verPro")?.addEventListener("click", () => {
    irAIndex("todo");
});

// ======= FUNCIONES PRINCIPALES =======
function visible(elemento, clase) {
    elemento.classList.add(`${clase}--show`);
}
function ocultar(elemento, clase) {
    elemento.classList.remove(`${clase}--show`);
}

// ======= MOSTRAR EL CARRITO =======
function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    let total = 0;

    const titulo = document.createElement("h1");
    titulo.textContent = "Mi Carrito";
    titulo.classList.add("titulo-carrito");
    contenedorCarrito.appendChild(titulo);

    carrito.forEach((item, index) => {
        const producto = productos.find(p => p.Codigo === item.Codigo);
        if (!producto) return;

        // contenedor del producto
        const fila = document.createElement("div");
        fila.classList.add("carrito-item");

        // Contenedor horizontal imagen + datos
        const contenedor = document.createElement("div");
        contenedor.classList.add("producto-contenedor");

        // Imagen
        const img = document.createElement("img");
        img.src = `img/${producto.Img}.jpg`;
        img.alt = producto.Producto;
        img.classList.add("carrito-img");

        // Datos
        const datos = document.createElement("div");
        datos.classList.add("producto-datos");

        // Nombre
        const nombre = document.createElement("span");
        nombre.textContent = producto.Producto;
        nombre.classList.add("carrito-nombre");
        datos.appendChild(nombre);

        // Talle/Medida
        if (item.Talle) {
            const medida = document.createElement("span");
            medida.textContent = `${producto.TipoMedida || "Medida"}: ${item.Talle}`;
            datos.appendChild(medida);
        }

        // Color
        if (item.Color) {
            const color = document.createElement("span");
            color.textContent = `Color: ${item.Color}`;
            datos.appendChild(color);
        }

        // Precio y cantidad solo si tiene precio
        if (producto.PrecioMayor) {
            const precio = document.createElement("span");
            precio.textContent = `Precio : $${producto.PrecioMayor.toFixed(2)}`;
            datos.appendChild(precio);

            const cantidad = document.createElement("span");
            cantidad.textContent = `Cantidad: ${item.Cantidad}`;
            datos.appendChild(cantidad);

            total += producto.PrecioMayor * item.Cantidad;
        }else{
            const precio = document.createElement("span");
            precio.textContent = "Para Consultar Precio";
            datos.appendChild(precio);
        }

        contenedor.append(img, datos);
        fila.appendChild(contenedor);

        // Botones debajo
        const botones = document.createElement("div");
        botones.classList.add("producto-botones");

        // Botón Editar (solo si hay precio y cantidad)
        if (producto.PrecioMayor && (item.Cantidad || 0) > 0) {
            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.classList.add("btn-editar");
            btnEditar.addEventListener("click", () =>
                activarEdicion(fila, item, index, producto)
            );
            botones.appendChild(btnEditar);
        }

        // Eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.addEventListener("click", () => {
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        });
        botones.appendChild(btnEliminar);

        fila.appendChild(botones);
        contenedorCarrito.appendChild(fila);
    });
    // Total
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("carrito-total");
    totalDiv.textContent = `Valor total estimado: $${total.toFixed(2)}`;
    contenedorCarrito.appendChild(totalDiv);

    // Botón comprar
    const btnComprar = document.createElement("button");
    btnComprar.textContent = "Realizar Compra";
    btnComprar.classList.add("btn-comprar");
    contenedorCarrito.appendChild(btnComprar);
}

function activarEdicion(fila, item, index, producto) {
    fila.innerHTML = "";

    const contenedor = document.createElement("div");
    contenedor.classList.add("producto-contenedor");

    const img = document.createElement("img");
    img.src = `img/${producto.Img}.jpg`;
    img.alt = producto.Producto;
    img.classList.add("carrito-img");

    const datos = document.createElement("div");
    datos.classList.add("producto-datos");

    const nombre = document.createElement("span");
    nombre.textContent = producto.Producto;
    nombre.classList.add("carrito-nombre");
    datos.appendChild(nombre);

    if (item.Talle) {
        const medida = document.createElement("span");
        medida.textContent = `${producto.TipoMedida || "Medida"}: ${item.Talle}`;
        datos.appendChild(medida);
    }

    if (item.Color) {
        const color = document.createElement("span");
        color.textContent = `Color: ${item.Color}`;
        datos.appendChild(color);
    }

    if (producto.PrecioMayor) {
        const precio = document.createElement("span");
        precio.textContent = `Precio: $${producto.PrecioMayor.toFixed(2)}`;
        datos.appendChild(precio);
    }

    // Input cantidad editable (solo si hay precio)
    let inputCantidad;
    if (producto.PrecioMayor) {
        inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.min = 1;
        inputCantidad.value = item.Cantidad;
        inputCantidad.classList.add("input-cantidad");
        datos.appendChild(inputCantidad);
    }

    contenedor.append(img, datos);
    fila.appendChild(contenedor);

    // Botones guardar/cancelar
    const botones = document.createElement("div");
    botones.classList.add("producto-botones");

    // Botón Guardar (solo si hay precio)
    let btnGuardar;
    if (producto.PrecioMayor) {
        btnGuardar = document.createElement("button");
        btnGuardar.textContent = "Guardar";
        btnGuardar.classList.add("btn-editar");
        btnGuardar.addEventListener("click", () => {
            const nuevaCantidad = parseInt(inputCantidad.value);
            item.Cantidad = nuevaCantidad >= 1 ? nuevaCantidad : 1;
            carrito[index] = item;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito();
        });
        botones.appendChild(btnGuardar);
    }

    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.classList.add("btn-eliminar");
    btnCancelar.addEventListener("click", mostrarCarrito);

    if (btnGuardar) botones.appendChild(btnGuardar);
    botones.appendChild(btnCancelar);

    fila.appendChild(botones);
}

// ======= EJECUCIÓN INICIAL =======
if (!carrito.length) {
        // No hay productos
        visible(seccionVacia, "vacio");
        ocultar(contenedorCarrito, "Carro");
    } else {
        visible(contenedorCarrito, "Carro");
        ocultar(seccionVacia, "vacio");
        mostrarCarrito()
    }



// ======= ZONA DE REALIZAR EL PEDIDO =======
function generarTextoPedido() {
    let mensaje = "";
    const CompraCar = JSON.parse(localStorage.getItem("carrito"));
    CompraCar.forEach(pcar => {
        const datos = productos.find(p => p.Codigo === pcar.Codigo);
        let linea = "- " + datos.Producto + " [" + datos.Codigo +"]" ;
        // Si tiene talle
        if (pcar.Talle) {
            linea += `\n ${datos.TipoMedida}: ` + pcar.Talle;
        }else{
            linea += "";
        }
        // Si tiene color
        if (pcar.Color) {
            linea += "\n Color: " + pcar.Color;
        }else{
            linea += "";
        }

        // Cantidad (negrita si falta)
        if (datos.PrecioMayor) {
            linea += "\n Cantidad: " + pcar.Cantidad;
        } else {
            linea += "\n *CONSULTA* del precio";
        }
        mensaje += linea + "\n\n";
    });
    return mensaje;
}
function BorrarCarrito(){
    carrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
}
// Abrir modal al pulsar comprar
document.querySelector(".btn-comprar").addEventListener("click", () => {
    visible(compraModal, "Compra-Modal");
    visible(opcion, "opcion");
});
// Retroceder del modal WhatsApp/Email al menú de opciones
btnRetrocederwps.addEventListener("click", () => {
    // Oculta cualquier sección activa dentro del modal
    ocultar(confirmacionWsp, "confirmacion-wsp");
    ocultar(formEmail, "form-email");
    ocultar(confirmacionEmail, "confirmacion-email");

    // Muestra nuevamente el menú de opciones
    visible(opcion, "opcion");
});
btnRetrocederemail.addEventListener("click", () => {
    // Oculta cualquier sección activa dentro del modal
    ocultar(formEmail, "form-email");
    ocultar(confirmacionEmail, "confirmacion-email");

    // Muestra nuevamente el menú de opciones
    visible(opcion, "opcion");
});

// ===== Eventos de WhatsApp=====
// Enviar WhatsApp
function enviarWhatsApp() {
    const saludo = "Hola, me gustaría realizar este pedido:\n";
    const mensaje = saludo + generarTextoPedido();
    const numero = "5491153122990"; // Número destino
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña
}
btnWhatsApp.addEventListener("click", () => {
    enviarWhatsApp();
    ocultar(opcion, "opcion");
    visible(confirmacionWsp, "confirmacion-wsp");
});
// Reenviar mensaje
btnReenviarWsp.addEventListener("click", () => {
    enviarWhatsApp();
});
// Cerrar confirmación y vaciar carrito
btnCerrarConfiWsp.addEventListener("click", () => {
    ocultar(confirmacionWsp, "confirmacion-wsp");
    ocultar(compraModal, "Compra-Modal");
    BorrarCarrito();
});



// ZONA DE ENVIADO EMAIL
// 👉 Mostrar formulario de Email al pulsar botón
btnEmail.addEventListener("click", () => {
    ocultar(document.querySelector(".opcion"), "opcion");
    visible(formEmail, "form-email");
});

// 👉 Enviar correo al pulsar "Enviar mensaje"
formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const fecha = new Date().toLocaleString();
    const pedido = generarTextoPedido();

    // Valores del form
    const templateParams = {
        cliente: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("msg-cliente").value,
        pedido: pedido,
        time: fecha
    };
    const SERVICE_ID = "service_cqvae1v";
    const TEMPLATE_ID = "template_1a2e9q6";
    const PUBLIC_KEY = "m2TiZgiU2f969EkXE";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(function(response) {
            console.log("✅ Email enviado:", response);
            ocultar(formEmail, "form-email");
            visible(confirmacionEmail, "confirmacion-email");
            estadoEmail.textContent = "✅ Pedido realizado, espere nuestra respuesta...";
        }, function(error) {
            console.error("❌ Error al enviar:", error);
            estadoEmail.textContent = "❌ Error al enviar el pedido, inténtelo nuevamente.";
            visible(confirmacionEmail, "confirmacion-email");
        });
});

// 👉 Cerrar confirmación y vaciar carrito
btnCerrarConfiEmail.addEventListener("click", () => {
    ocultar(confirmacionEmail, "confirmacion-email");
    ocultar(compraModal, "Compra-Modal");
    BorrarCarrito();
});