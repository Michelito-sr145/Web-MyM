// === MENÚ ===
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
// === LINK DE REDES ===
const linkSocial = document.querySelectorAll('.linkSocial');
const Links_Curses = {
    fc: {
        link: "https://www.facebook.com/plantillasmaster"
    },
    ig: {
        link: "https://www.instagram.com/plantillasmaster"
    },
    wsp: {
        link: "https://wa.me/5491153122990?text=Hola%20quiero%20más%20información"
    },
    tktk: {
        link: "https://www.tiktok.com/plantillasmaster"
    },
};
linkSocial.forEach(item => {
    item.addEventListener('click', (e) => {
        const key = item.classList[1];
        if (Links_Curses[key]) {
            window.open(Links_Curses[key].link, "_blank");
        }
    });
});

// Función universal para redirigir a index.html con valor
function irAIndex(valor) {
    localStorage.setItem("filtrarProductos", valor.replace(/-/g, " "));
    window.location.href = "index.html";
}

// Botones del banner/header
document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        irAIndex(btn.dataset.cat);
    });
});


// CARRITO DE COMPRAS ICONO
function actualizarIconoCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const span = document.getElementById("carrito-cantidad");

    if (span) {
        span.textContent = carrito.length; // número de productos distintos
    }
}
// ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", actualizarIconoCarrito);