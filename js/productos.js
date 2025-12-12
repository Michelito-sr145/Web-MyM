// Estado = "oferta" - "limitado" - "nuevo" - "agotado" - "exclusivo" - "rebajado" - "proximamente" - "top"
// Tipo Medida: "talle" - "Cm" - "Litros" - "Marca" 

const productos = [
    // ----------------------
    // PLANTILLAS
    // ----------------------
    {
        Codigo: "P01", Estado: "top", Img: "Plantillas/ComunBlanca-1", Producto: "Comun Blancas", Precio: 2000,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Toalla y goma eva. Precio minorista 2000$. Mayorista desde 3 docenas 900$.",
        Color: ["Blanco"],
    },
    {
        Codigo: "P02", Estado: "top", Img: "Plantillas/ComunNegra-1", Producto: "Comun Negras", Precio: 2000,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Toalla y goma eva. Precio minorista 2000$. Mayorista desde 3 docenas 950$.",
        Color: ["Negro"],
    },
    {
        Codigo: "P03", Estado: "", Img: "Plantillas/ArcoBlanca-1", Producto: "Arco Blancas", Precio: 3000,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Toalla y goma eva. Precio minorista 3000$. Mayorista desde 3 docenas 1000$.",
        Color: ["Blanco"],
    },
    {
        Codigo: "P04", Estado: "", Img: "Plantillas/ArcoNegra-1", Producto: "Arco Negras", Precio: 3000,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [34,35,36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Toalla y goma eva. Precio minorista 3000$. Mayorista desde 3 docenas 1050$.",
        Color: ["Negro"],
    },
    {
        Codigo: "P05", Estado: "limitado", Img: "Plantillas/Corderito-1", Producto: "Coderito", Precio: 3500,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [34,35,36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Plantillas de corderito.",
        Color: ["Marrón claro"],
    },
    {
        Codigo: "P06", Estado: "", Img: "Plantillas/Leal-1", Producto: "plantilla talon leal", Precio: 12000,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [37,38,39,40,41,42,43,44,45,46],
        Descripcion: "Plantilla talón tipo Leal.",
        Color: ["Naranja"],
    },
    {
        Codigo: "P07", Estado: "", Img: "Plantillas/Latex-1", Producto: "Latex", Precio: 0,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [34,35,36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Plantilla de látex.",
        Color: ["Blanco"],
    },
    {
        Codigo: "P08", Estado: "", Img: "Plantillas/3d-1", Producto: "plantilla 3D", Precio: 7500,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Plantilla 3D recortable.",
        Color: ["Negro"],
    },
    {
        Codigo: "P09", Estado: "limitado", Img: "Plantillas/Cuero-1", Producto: "Cuero", Precio: 0,
        Categoria: "PLANTILLAS",
        TipoMedida: "talle",
        Talle: [34,35,36,37,38,39,40,41,42,43,44,45],
        Descripcion: "Plantilla de cuero.",
        Color: [],
    },

    // ----------------------
    // LLAVEROS REGIONALES
    // ----------------------

    {
        Codigo: "MODELO00", Estado: "", Img: "Llaveros/Modelo00-1", Producto: "Pasacinto con Broche", Precio: 2500,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (2500$) y Precio Mayorista (1280$)",
        Color: [],
    },
    {
        Codigo: "MODELO01", Estado: "", Img: "Llaveros/Modelo01-1", Producto: "pascinto con adorno", Precio: 3000,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3000$) y Precio Mayorista (1400$)",
        Color: [],
    },
    {
        Codigo: "MODELO02", Estado: "", Img: "Llaveros/Modelo02-1", Producto: "Pasacinto con Mosqueton", Precio: 3500,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3500$) y Precio Mayorista (1800$)",
        Color: [],
    },
    {
        Codigo: "MODELO03", Estado: "", Img: "Llaveros/Modelo03-1", Producto: "pasacinto alambre", Precio: 2500,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (2500$) y Precio Mayorista (1260$)",
        Color: [],
    },
    {
        Codigo: "MODELO04", Estado: "", Img: "Llaveros/Modelo04-1", Producto: "pasacinto vigilante", Precio: 3000,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3000$) y Precio Mayorista (1450$)",
        Color: [],
    },
    {
        Codigo: "MODELO07", Estado: "", Img: "Llaveros/Modelo07-1", Producto: "Huevo con Adorno", Precio: 2500,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (2500$) y Precio Mayorista (1200$)",
        Color: [],
    },
    {
        Codigo: "MODELO08", Estado: "", Img: "Llaveros/Modelo08-1", Producto: "llavero huevo con dije", Precio: 3500,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3500$) y Precio Mayorista (1800$)",
        Color: [],
    },
    {
        Codigo: "MODELO09", Estado: "", Img: "Llaveros/Modelo09-1", Producto: "Llavero con Adorno", Precio: 3000,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3000$) y Precio Mayorista (1600$)",
        Color: [],
    },
    {
        Codigo: "MODELO10", Estado: "", Img: "Llaveros/Modelo10-1", Producto: "Dije Herradura", Precio: 3000,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3000$) y Precio Mayorista (1600$)",
        Color: [],
    },
    {
        Codigo: "MODELO11", Estado: "", Img: "Llaveros/Modelo11", Producto: "Llavero River", Precio: 3000,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3000$) y Precio Mayorista (1600$)",
        Color: [],
    },
    {
        Codigo: "MODELO12", Estado: "", Img: "Llaveros/Modelo12", Producto: "Llavero Boca", Precio: 3000,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3000$) y Precio Mayorista (1600$)",
        Color: [],
    },
    {
        Codigo: "MODELO13", Estado: "", Img: "Llaveros/Modelo13-1", Producto: "Llavero corto 2 remaches", Precio: 3500,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3500$) y Precio Mayorista (1900$)",
        Color: [],
    },
    {
        Codigo: "MODELO14", Estado: "", Img: "Llaveros/Modelo14-1", Producto: "Llavero corto 1 remache", Precio: 3500,
        Categoria: "LLAVEROS REGIONALES DE CUERO",
        TipoMedida: "talle",
        Talle: [],
        Descripcion: "Llavero regional de cuero. -Precio Minorista (3500$) y Precio Mayorista (1850$)",
        Color: [],
    },
];




const TodasImg = [
    // ----------------------
    // PLANTILLAS
    // ----------------------
    {
        codigo: "P01",
        Imagenes: [ "Plantillas/ComunBlanca-1", "Plantillas/ComunBlanca-2", "Plantillas/ComunBlanca-3" ],
    },
    {
        codigo: "P02",
        Imagenes: [ "Plantillas/ComunNegra-1", "Plantillas/ComunNegra-2", "Plantillas/ComunNegra-3" ],
    },
    {
        codigo: "P03",
        Imagenes: [ "Plantillas/ArcoBlanca-1", "Plantillas/ArcoBlanca-2", "Plantillas/ArcoBlanca-3" ],
    },
    {
        codigo: "P04",
        Imagenes: [ "Plantillas/ArcoNegra-1", "Plantillas/ArcoNegra-2", "Plantillas/ArcoNegra-3" ],
    },
    {
        codigo: "P05",
        Imagenes: [ "Plantillas/Corderito-1", "Plantillas/Corderito-2"],
    },
    {
        codigo: "P06",
        Imagenes: [ "Plantillas/Leal-1", "Plantillas/Leal-2", "Plantillas/Leal-3" ],
    },
    {
        codigo: "P07",
        Imagenes: [ "Plantillas/Latex-1", "Plantillas/Latex-2", "Plantillas/Latex-3" ],
    },
    {
        codigo: "P08",
        Imagenes: [ "Plantillas/3D-1", "Plantillas/3D-2", "Plantillas/3D-3", ],
    },
    {
        codigo: "P09",
        Imagenes: [ "Plantillas/Cuero-1", "Plantillas/Cuero-2", "Plantillas/Cuero-3", ],
    },

    // ----------------------
    // LLAVEROS REGIONALES
    // ----------------------
    {
        codigo: "MODELO00",
        Imagenes: [ "Llaveros/Modelo00-1", "Llaveros/Modelo00-2", "Llaveros/Modelo00-3" ],
    },
    {
        codigo: "MODELO01",
        Imagenes: [ "Llaveros/Modelo01-1", "Llaveros/Modelo01-2", "Llaveros/Modelo01-3" ],
    },
    {
        codigo: "MODELO02",
        Imagenes: [ "Llaveros/Modelo02-1", "Llaveros/Modelo02-2" ],
    },
    {
        codigo: "MODELO03",
        Imagenes: [ "Llaveros/Modelo03-1", "Llaveros/Modelo03-2", "Llaveros/Modelo03-3" ],
    },
    {
        codigo: "MODELO04",
        Imagenes: [ "Llaveros/Modelo04-1", "Llaveros/Modelo04-2", "Llaveros/Modelo04-3" ],
    },
    {
        codigo: "MODELO07",
        Imagenes: [ "Llaveros/Modelo07-1", "Llaveros/Modelo07-2", "Llaveros/Modelo07-3" ],
    },
    {
        codigo: "MODELO08",
        Imagenes: [ "Llaveros/Modelo08-1", "Llaveros/Modelo08-2", "Llaveros/Modelo08-3" ],
    },
    {
        codigo: "MODELO09",
        Imagenes: [ "Llaveros/Modelo09-1", "Llaveros/Modelo09-2", "Llaveros/Modelo09-3" ],
    },
    {
        codigo: "MODELO10",
        Imagenes: [ "Llaveros/Modelo10-1", "Llaveros/Modelo10-2", "Llaveros/Modelo10-3" ],
    },
    {
        codigo: "MODELO11",
        Imagenes: [ "Llaveros/Modelo11"],
    },
    {
        codigo: "MODELO12",
        Imagenes: [ "Llaveros/Modelo12" ],
    },
    {
        codigo: "MODELO13",
        Imagenes: [ "Llaveros/Modelo13-1", "Llaveros/Modelo13-2", "Llaveros/Modelo13-3" ],
    },
    {
        codigo: "MODELO14",
        Imagenes: [ "Llaveros/Modelo14-1", "Llaveros/Modelo14-2", "Llaveros/Modelo14-3" ],
    },
];









//Img,Estado, Categoria, Codigo, Producto, Talle, Precio, Descripcion, Color

//Se muestra en el carrito: Img, Producto, Talle, Precio, Color, Cantidad
