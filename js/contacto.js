// Inicializar EmailJS
emailjs.init("m2TiZgiU2f969EkXE");

// Selección de elementos
const formularioContacto = document.getElementById("contacto-form");
const estado = document.getElementById("estado");

// Función para mostrar mensaje temporal
function mostrarEstado(mensaje, exito = true) {
    estado.textContent = mensaje;
    estado.style.color = exito ? "green" : "red";
    setTimeout(() => {
        estado.textContent = "";
    }, 9000);
}

// Función para obtener fecha y hora
function obtenerFecha() {
    return new Date().toLocaleString();
}

// Evento submit del formulario
formularioContacto.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensajeCliente = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensajeCliente) {
        mostrarEstado("Por favor completa todos los campos obligatorios.", false);
        return;
    }

    const fecha = obtenerFecha();

    const templateParams = {
        cliente: nombre,
        email: email,
        mensaje: mensajeCliente,
        pedido: "Consulta desde la página de contacto",
        time: fecha
    };

    const SERVICE_ID = "service_cqvae1v";
    const TEMPLATE_ID = "template_1a2e9q6";
    const PUBLIC_KEY = "m2TiZgiU2f969EkXE";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(function(response) {
            console.log("✅ Email enviado:", response);
            mostrarEstado("✅ Mensaje enviado correctamente, nos pondremos en contacto.", true);
            formularioContacto.reset();
        }, function(error) {
            console.error("❌ Error al enviar:", error);
            mostrarEstado("❌ Error al enviar el mensaje, inténtelo nuevamente.", false);
        });
});
