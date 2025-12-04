// Estado = "oferta " - "limitado" - "nuevo" - "agotado" - "exclusivo" - "rebajado" - "proximamente" - "top"
// TipoMedida: "talle" - "Cm" - "Litros" "Marca"
const productos = [
    {
        Codigo: "P01", 
        Estado: "top", 
        Img: "Plantillas/ComunBlanca-1", 
        Producto: "Plantilla Blanca", 
        Precio: 15, 

        Categoria: "Plantillas", 
        TipoMedida: "talle",
        Talle: [38,39,40,41,42,43,44], 
        Descripcion: "Cada plantilla y accesorio es fabricado con materiales seleccionados para cuidar tus pies ", 
        Color: "",
    },
];
const TodasImg = [
    { 
        codigo:"P01",
        Imagenes:[
            "Plantillas/ComunBlanca-1.jpg",
            "Plantillas/ComunBlanca-2.jpg",
            "Plantillas/ComunBlanca-3.jpg",
            "Plantillas/ComunBlanca-4.jpg"]
        },
    
];

//Img,Estado, Categoria, Codigo, Producto, Talle, Precio, Descripcion, Color

//Se muestra en el carrito: Img, Producto, Talle, Precio, Color, Cantidad
