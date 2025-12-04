// === CARRUSEL DE PRODUCTOS DESTACADOS ===
const productosDestacados = productos.filter(p => p.Estado);
const carrusel = document.querySelector('.carrusel');
const carruselItems = document.querySelector('.carrusel-items');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

const listaProductos = document.querySelector('.productos-lista');
const busquedaInput = document.getElementById('busqueda');

let index = 0;        // índice del primer producto visible
let intervalo = null; // autoslide

// --- Render dinámico del carrusel ---
productosDestacados.forEach(prod => {
  const a = document.createElement('a');
  a.href = `producto.html?code=${encodeURIComponent(prod.Codigo)}`;
  a.className = 'c-producto';
  a.dataset.codigo = prod.Codigo;

  a.innerHTML = `
    <div class="Presentacion">
      <h3 class="${prod.Estado}">${prod.Estado}</h3>
      <img src="img/${prod.Img}.jpg" alt="${prod.Producto}">
    </div>
    <div class="Texto">
      <h4>${prod.Producto}</h4>
      <p>${prod.Precio ? `$${prod.Precio}` : 'Consultar precio'}</p>
    </div>
  `;
  carruselItems.appendChild(a);
});

const totalItems = productosDestacados.length;

function itemWidth() {
  const first = carruselItems.querySelector('.c-producto');
  return first ? first.getBoundingClientRect().width : 0;
}

function visibles() {
  const cw = carrusel.getBoundingClientRect().width;
  const iw = itemWidth() || cw;
  return Math.max(1, Math.round(cw / iw)); // redondeo evita decimales
}

function maxIndex() {
  return Math.max(0, totalItems - visibles());
}

function actualizarCarrusel() {
  const iw = itemWidth();
  if (index > maxIndex()) index = maxIndex(); // evita huecos
  carruselItems.style.transform = `translateX(-${index * iw}px)`;
}

function siguiente() {
  const maxI = maxIndex();
  index = (index >= maxI) ? 0 : index + 1;
  actualizarCarrusel();
}

function anterior() {
  const maxI = maxIndex();
  index = (index <= 0) ? maxI : index - 1;
  actualizarCarrusel();
}

// Botones
btnNext.addEventListener('click', siguiente);
btnPrev.addEventListener('click', anterior);

// Auto slide
function iniciarAutoSlide() {
  detenerAutoSlide();
  intervalo = setInterval(siguiente, 9000);
}
function detenerAutoSlide() {
  if (intervalo) clearInterval(intervalo);
}
carrusel.addEventListener('mouseenter', detenerAutoSlide);
carrusel.addEventListener('mouseleave', iniciarAutoSlide);

// Swipe táctil
let startX = 0;
let endX = 0;
carruselItems.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  detenerAutoSlide();
});
carruselItems.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});
carruselItems.addEventListener('touchend', () => {
  const diff = startX - endX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? siguiente() : anterior();
  }
  iniciarAutoSlide();
});

// Recalcular en resize
window.addEventListener('resize', actualizarCarrusel);

// Inicialización del carrusel
actualizarCarrusel();
iniciarAutoSlide();


// === ZONA DE TODOS LOS PRODUCTOS ===
function mostrarProductos(productosFiltrados) {
  listaProductos.innerHTML = '';
  productosFiltrados.forEach(prod => {
    const item = document.createElement('div');
    item.classList.add('producto');
    item.setAttribute('data-codigo', prod.Codigo);

    item.innerHTML = `
      <a href="producto.html?code=${encodeURIComponent(prod.Codigo)}">
        <img src="img/${prod.Img}.jpg" alt="${prod.Producto}">
        <h4>${prod.Producto}</h4>
        <p>${prod.Precio ? `$${prod.Precio}` : "Consultar precio"}</p>
        <button class="btn-visualizar">Comprar</button>
      </a>
    `;

    listaProductos.appendChild(item);
  });
}

function aplicarBusqueda() {
  const texto = busquedaInput.value.toLowerCase();
  const filtrados = productos.filter(p =>
    p.Producto.toLowerCase().includes(texto)
  );
  mostrarProductos(filtrados);
}
busquedaInput.addEventListener('input', aplicarBusqueda);

// Inicializar con todos los productos
mostrarProductos(productos);

// --- Manejo de filtro al llegar desde otra página ---
window.addEventListener("DOMContentLoaded", () => {
  const valor = localStorage.getItem("filtrarProductos");
  if (valor) {
    const seccionProductos = document.getElementById("productos");
    seccionProductos?.scrollIntoView({ behavior: "smooth" });

    if (valor !== "todo" && busquedaInput) {
      busquedaInput.value = valor;
      busquedaInput.dispatchEvent(new Event("input"));
    }

    localStorage.removeItem("filtrarProductos");
  }
});