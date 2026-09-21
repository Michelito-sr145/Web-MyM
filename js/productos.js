//Se muestra en el carrito: Img, Producto, Talle, Precio, Color, Cantidad

//    {
//        Codigo: null, // ""
//        Estado: null, // Tipos de estado: "Oferta" - "Limitado" - "Nuevo" - "Agotado" - "Exclusivo" - "Rebajado" - "Proximamente" - "Top" - null (si no lleva ninguno o Bloqueado/Quitar)
//        Img: "", // la forma en que se coloca "(categoria)/(codigo)-img1" por ejemplo "Plantillas/P01-img1"
//        Producto: "",
//        PrecioMayor: , // valor numerico
//        PrecioMinorista: , // valor numerico
//        Categoria: "",
//        TipoMedida: "", // deacuerdo a la medida que se da: "Peso" - "Talle" - "Volumen" - "Longitud"
//        Talle: [], // En listar los distintos talles o medidas, si dice X al Y. por ejemplo "30 al 39" se enlista de la siguiente forma ["30","31","32","33","34","35","36","37","38","39"] 
//        Descripcion: "", // ""
//        Color: [], // En listar los distintos colores. si no tiene ningun color poner "null"
//    },


//    {
//        codigo: "",
//        Imagenes: [ ], // la forma en que se coloca "(categoria)/(codigo)-imgX" para cada producto pon un numero de 3 imagenes osea (img1 - img2 - img3)
//    },

const productos = [

// -Plantillas
    {
        Codigo: "P01",
        Estado: "Top",
        Img: "Plantillas/P01-img1",
        Producto: "Común Blanca",
        PrecioMayor: 950,
        PrecioMinorista: 2000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: "Toalla y goma eva. precio minorista [2000] precio mayorista apartir de 3docenas(36 unidades) solo con talles variados [900]",
        Color: null,
    },
    {
        Codigo: "P02",
        Estado: null,
        Img: "Plantillas/P02-img1",
        Producto: "Común Negra",
        PrecioMayor: 1000,
        PrecioMinorista: 2000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: "Toalla y goma eva. precio minorista [2000] precio mayorista apartir de 3docenas(36 unidades) solo con talles variados [950]",
        Color: null,
    },
    {
        Codigo: "P03",
        Estado: "Top",
        Img: "Plantillas/P03-img1",
        Producto: "Arco Blanca",
        PrecioMayor: 1050,
        PrecioMinorista: 3000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: "Toalla y goma eva. precio minorista [3000] precio mayorista apartir de 3docenas(36 unidades) solo con talles variados [1000]",
        Color: null,
    },
    {
        Codigo: "P04",
        Estado: null,
        Img: "Plantillas/P04-img1",
        Producto: "Arco Negra",
        PrecioMayor: 1100,
        PrecioMinorista: 3000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: "Toalla y goma eva. precio minorista [3000] precio mayorista apartir de 3docenas(36 unidades) solo con talles variados [1050]",
        Color: null,
    },
    {
        Codigo: "P05",
        Estado: null,
        Img: "Plantillas/P05-img1",
        Producto: "Coderito",
        PrecioMayor: 1600,
        PrecioMinorista: 3500,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P06",
        Estado: null,
        Img: "Plantillas/P06-img1",
        Producto: "plantilla talon leal",
        PrecioMayor: 6400,
        PrecioMinorista: 15000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P07",
        Estado: "Oferta",
        Img: "Plantillas/P07-img1",
        Producto: "Latex",
        PrecioMayor: 3200,
        PrecioMinorista: null,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P08",
        Estado: "Oferta",
        Img: "Plantillas/P08-img1",
        Producto: "3D Chico",
        PrecioMayor: 2800,
        PrecioMinorista: 4000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: "Plantilla Recortable/adaptable a los talles: 35 al 40",
        Color: null,
    },
    {
        Codigo: "P09",
        Estado: "Oferta",
        Img: "Plantillas/P09-img1",
        Producto: "3D Grande",
        PrecioMayor: 2800,
        PrecioMinorista: 4000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: "Plantilla Recortable/adaptable a los talles: 40 al 45",
        Color: null,
    },
    {
        Codigo: "P10",
        Estado: null,
        Img: "Plantillas/P10-img1",
        Producto: "Cuero",
        PrecioMayor: 4000,
        PrecioMinorista: 8000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P11",
        Estado: "Limitado",
        Img: "Plantillas/P11-img1",
        Producto: "Viscoelasticas Anatomica",
        PrecioMayor: 6500,
        PrecioMinorista: 15000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        Descripcion: null,
        Color: ["Naranja","Negro","Gris","Surtido",],
    },
    {
        Codigo: "P12",
        Estado: "Limitado",
        Img: "Plantillas/P12-img1",
        Producto: "Biomagnetica",
        PrecioMayor: 4000,
        PrecioMinorista: 8000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },
    {
        Codigo: "P13",
        Estado: null,
        Img: "Plantillas/P13-img1",
        Producto: "Plantilla Termoformadas",
        PrecioMayor: 3700,
        PrecioMinorista: 8000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P14",
        Estado: null,
        Img: "Plantillas/P14-img1",
        Producto: "Plantilla Reforzada Memo Verde",
        PrecioMayor: 4700,
        PrecioMinorista: 12000,
        Categoria: "Plantillas",
        TipoMedida: "Talle",
        Talle: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P15",
        Estado: null,
        Img: "Plantillas/P15-img1",
        Producto: "Descanso Cuero-Arco-Talon",
        PrecioMayor: null,
        PrecioMinorista: 30000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    
    {
        Codigo: "P16",
        Estado: null,
        Img: "Plantillas/P16-img1",
        Producto: "Descanso Arco-Oliva",
        PrecioMayor: null,
        PrecioMinorista: 20000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P17",
        Estado: null,
        Img: "Plantillas/P17-img1",
        Producto: "Descanso Arco-Oliva-Talon",
        PrecioMayor: null,
        PrecioMinorista: 25000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    
    {
        Codigo: "P18",
        Estado: null,
        Img: "Plantillas/P18-img1",
        Producto: "Erconomicas Burbuja",
        PrecioMayor: 3500,
        PrecioMinorista: 6000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P19",
        Estado: null,
        Img: "Plantillas/P19-img1",
        Producto: "WASSINGTON T-1 Gel",
        PrecioMayor: null,
        PrecioMinorista: 20000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "P20",
        Estado: null,
        Img: "Plantillas/P20-img1",
        Producto: "Silicona Activ Gel",
        PrecioMayor: null,
        PrecioMinorista: 18000,
        Categoria: "Plantillas",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

// -Cordones

    {
        Codigo: "COR01",
        Estado: null,
        Img: "Cordones/COR01-img1",
        Producto: "Chato Común x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45 $2500", "0.60 $3000", "0.90 $3400", "1.00 $3600", "1.10 $3800", "1.20 $4000", "1.50 $4400"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Blanco", "Negro"],
    },

    {
        Codigo: "COR02",
        Estado: null,
        Img: "Cordones/COR02-img1",
        Producto: "Chato Común Color x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45 $2500", "0.60 $3000", "0.90 $3400", "1.00 $3600", "1.10 $3800", "1.20 $4000", "1.50 $4400"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR03",
        Estado: null,
        Img: "Cordones/COR01-img1",
        Producto: "Chato Común Blanco x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45", "0.60", "0.90", "1.00", "1.10", "1.20", "1.50"],//["0.45 $3200", "0.60 $3800", "0.90 $5600", "1.00 $6300", "1.10 $7000", "1.20 $7500", "1.50 $9300"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR04",
        Estado: null,
        Img: "Cordones/COR01-img1",
        Producto: "Chato Común Negro x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45", "0.60", "0.90", "1.00", "1.10", "1.20", "1.50"],//["0.45 $4000", "0.60 $5500", "0.90 $7400", "1.00 $8000", "1.10 $9000", "1.20 $10000", "1.50 $13000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR05",
        Estado: null,
        Img: "Cordones/COR02-img2",
        Producto: "Chato Común Color x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60", "1.00", "1.20", "1.50"],
        Descripcion: "Consulte por los colores para dicha medida.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR06",
        Estado: null,
        Img: "Cordones/COR06-img1",
        Producto: "Oval x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60 $3500", "0.90 $3800", "1.00 $4000", "1.10 $4200", "1.20 $4300", "1.50 $4900"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Blanco", "Negro"],
    },

    {
        Codigo: "COR07",
        Estado: null,
        Img: "Cordones/COR07-img1",
        Producto: "Oval Color x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60 $3500", "0.90 $3800", "1.00 $4000", "1.10 $4200", "1.20 $4300", "1.50 $4900"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR08",
        Estado: null,
        Img: "Cordones/COR06-img1",
        Producto: "Oval Blanco x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60", "0.90", "1.00", "1.10", "1.20", "1.50"],//["0.60 $4900", "0.90 $7300", "1.00 $8000", "1.10 $8800", "1.20 $9600", "1.50 $11000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR09",
        Estado: null,
        Img: "Cordones/COR06-img1",
        Producto: "Oval Negro x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60", "0.90", "1.00", "1.10", "1.20", "1.50"],//["0.60 $6000", "0.90 $8400", "1.00 $10000", "1.10 $11000", "1.20 $12000", "1.50 $14000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR10",
        Estado: null,
        Img: "Cordones/COR07-img2",
        Producto: "Oval Color x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60", "1.00", "1.20", "1.50"],
        Descripcion: "Consulte por los colores para dicha medida.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR11",
        Estado: null,
        Img: "Cordones/COR11-img1",
        Producto: "Libreto x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60 $3500", "0.75 $3800", "0.90 $4100", "1.00 $4300", "1.10 $4400", "1.20 $4500", "1.30 $4800", "1.50 $5200"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Blanco", "Negro"],
    },

    {
        Codigo: "COR12",
        Estado: null,
        Img: "Cordones/COR12-img1",
        Producto: "Libreto Color x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60 $3500", "0.75 $3800", "0.90 $4100", "1.00 $4300", "1.10 $4400", "1.20 $4500", "1.30 $4800", "1.50 $5200"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR13",
        Estado: null,
        Img: "Cordones/COR11-img1",
        Producto: "Libreto Blanco x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60", "0.75", "0.90", "1.00", "1.10", "1.20", "1.30", "1.50"],//["0.60 $5300", "0.75 $6600", "0.90 $7800", "1.00 $8700", "1.10 $9500", "1.20 $10500", "1.30 $11500", "1.50 $12700"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR14",
        Estado: null,
        Img: "Cordones/COR11-img1",
        Producto: "Libreto Negro x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60", "0.75", "0.90", "1.00", "1.10", "1.20", "1.30", "1.50"],//["0.60 $6700", "0.75 $7800", "0.90 $9000", "1.00 $10000", "1.10 $11000", "1.20 $13000", "1.30 $14000", "1.50 $17000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR15",
        Estado: null,
        Img: "Cordones/COR12-img2",
        Producto: "Libreto Color x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "Consulte por los colores para dicha medida.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR16",
        Estado: null,
        Img: "Cordones/COR16-img1",
        Producto: "Cola Rata x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45 $2500", "0.60 $3000", "1.00 $3500", "1.20 $4000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Blanco"],
    },

    {
        Codigo: "COR17",
        Estado: null,
        Img: "Cordones/COR17-img1",
        Producto: "Cola Rata Color x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45 $2500", "0.60 $3000", "1.00 $3500", "1.20 $4000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR18",
        Estado: null,
        Img: "Cordones/COR16-img1",
        Producto: "Cola Rata Blanco x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45", "0.60", "1.00", "1.20"], //["0.45 $3200", "0.60 $3500", "1.00 $6500", "1.20 $7800"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR19",
        Estado: null,
        Img: "Cordones/COR16-img1",
        Producto: "Cola Rata Negro x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45", "0.60", "1.00", "1.20"], //["0.45 $3700", "0.60 $5000", "1.00 $7800", "1.20 $9000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR20",
        Estado: null,
        Img: "Cordones/COR17-img1",
        Producto: "Cola Rata Color x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.45", "0.60", "1.00", "1.20"],//["0.45 $5000", "0.60 $6000", "1.00 $9000", "1.20 $11000"],
        Descripcion: "La medida 0.60 tiene más colores. La medida 1.20 solo Marrón.",
        Color: ["Marrón(331)", "Beige(350)"],
    },

    {
        Codigo: "COR21",
        Estado: null,
        Img: "Cordones/COR21-img1",
        Producto: "Tubular x12",
        PrecioMayor: 6000,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00", "1.20", "1.50"],
        Descripcion: "",
        Color: ["Blanco", "Negro"],
    },

//    {
//        Codigo: "COR22",
//        Estado: null,
//        Img: "Cordones/COR21-img1",
//        Producto: "Tubular Color x12",
//        PrecioMayor: 6000,
//        PrecioMinorista: null,
//        Categoria: "Cordones",
//        TipoMedida: "Metros",
//        Talle: ["1.00", "1.20", "1.50"],
//        Descripcion: "",
//        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
//    },

    {
        Codigo: "COR23",
        Estado: null,
        Img: "Cordones/COR21-img1",
        Producto: "Tubular Blanco x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00", "1.20", "1.50"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "COR24",
        Estado: null,
        Img: "Cordones/COR21-img1",
        Producto: "Tubular Negro x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00", "1.20", "1.50"],
        Descripcion: "",
        Color: null,
    },

//    {
//        Codigo: "COR25",
//        Estado: null,
//        Img: "Cordones/COR25-img1",
//        Producto: "Tubular Color x72",
//        PrecioMayor: null,
//        PrecioMinorista: null,
//        Categoria: "Cordones",
//        TipoMedida: "Metros",
//        Talle: ["1.00", "1.20", "1.50"],
//        Descripcion: "",
//        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
//    },

    {
        Codigo: "COR26",
        Estado: null,
        Img: "Cordones/COR26-img1",
        Producto: "Redondo x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00 $4500", "1.20 $5500", "1.50 $6600", "1.80 $7800", "2.00 $8500"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio. Solo queda Negro",
        Color: ["Negro"],
    },

    {
        Codigo: "COR27",
        Estado: null,
        Img: "Cordones/COR26-img1",
        Producto: "Redondo Color x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00 $4500", "1.20 $5500", "1.50 $6600", "1.80 $7800", "2.00 $8500"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR28",
        Estado: null,
        Img: "Cordones/COR26-img1",
        Producto: "Redondo Blanco x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00", "1.20", "1.50", "1.80"], //["1.00 $10000", "1.20 $12000", "1.50 $15000", "1.80 $18000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR29",
        Estado: null,
        Img: "Cordones/COR26-img1",
        Producto: "Redondo Negro x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00", "1.20", "1.50", "1.80", "2.00"],//["1.00 $13000", "1.20 $16000", "1.50 $19000", "1.80 $23000", "2.00 $32000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio.",
        Color: null,
    },

    {
        Codigo: "COR30",
        Estado: null,
        Img: "Cordones/COR26-img1",
        Producto: "Redondo Color x72",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.00", "1.20", "1.50", "1.80", "2.00"], //["1.00 $17000", "1.20 $21000", "1.50 $26000", "1.80 $31000", "2.00 $36000"],
        Descripcion: "Las medidas que solo tienen pocos colores son: 1.80 Marrón(331) - Beige(350) / 2.00 Marrón(331).",
        Color: ["Consultar Color", "Lila(803)", "Turquesa(850)", "Rojo(80)", "Francia(582)", "Celeste(36)", "Marrón(331)", "Violeta(568)", "Gris plata(37)", "Gris medio(38)", "Gris topo(361)", "Bordo/granate(338)", "Rojo vino(508)", "Palo rosa /nud(121)", "A marino(157)", "Verde navidad(276)", "Verde militar(13)", "Rosa bebe(76)", "Rosa chicle(99)", "Beige(350)", "Beige oscuro(861)", "Hueso(91)", "Ladrillo(352)", "Naranja(820)", "Coral(647)", "Salmón(502)", "Verde magenta(448)", "Fuccia(84)", "Amarillo(810)", "Amarillo papito(808)", "Purpura", "Natural(860)"],
    },

    {
        Codigo: "COR31",
        Estado: null,
        Img: "Cordones/COR31-img1",
        Producto: "Redondo Reflex x12",
        PrecioMayor: 12000,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: ["Gris", "Negro"],
    },

    {
        Codigo: "COR32",
        Estado: null,
        Img: "Cordones/COR32-img1",
        Producto: "Redondo Bicolor x12",
        PrecioMayor: 10000,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "COR33",
        Estado: null,
        Img: "Cordones/COR32-img2",
        Producto: "Redondo Bicolor x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "COR34",
        Estado: null,
        Img: "Cordones/COR34-img1",
        Producto: "Fluor Chato x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60 $2700", "0.90 $4600"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "COR35",
        Estado: null,
        Img: "Cordones/COR35-img1",
        Producto: "Fluor Oval x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60 $3500", "1.00 $4600"],
        Descripcion: "",
        Color: ["Verde", "Amarillo", "Fuccia", "Naranja"],
    },

    {
        Codigo: "COR36",
        Estado: null,
        Img: "Cordones/COR36-img1",
        Producto: "Fluor Libreto x12",
        PrecioMayor: 6000,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: ["Verde", "Amarillo", "Fuccia", "Naranja"],
    },

    {
        Codigo: "COR37",
        Estado: null,
        Img: "Cordones/COR36-img1",
        Producto: "Fluor Libreto x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: ["Verde", "Amarillo", "Fuccia", "Naranja"],
    },

    {
        Codigo: "COR38",
        Estado: null,
        Img: "Cordones/COR38-img1",
        Producto: "Lurex x12",
        PrecioMayor: "Por Medida",
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["0.60 $5200", "1.00 $7000", "1.20 $8000"],
        Descripcion: "Cada medida del cordón lleva su respectivo precio. El blister viene con colores surtidos.",
        Color: null,
    },

    {
        Codigo: "COR39",
        Estado: null,
        Img: "Cordones/COR39-img1",
        Producto: "Ancho 1.5cm x12",
        PrecioMayor: 6700,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: ["Blanco", "Negro"],
    },

    {
        Codigo: "COR40",
        Estado: null,
        Img: "Cordones/COR39-img1",
        Producto: "Ancho Blanco 1.5cm x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "COR41",
        Estado: null,
        Img: "Cordones/COR39-img1",
        Producto: "Ancho Negro 1.5cm x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "COR42",
        Estado: null,
        Img: "Cordones/COR42-img1",
        Producto: "Ancho 2cm x12",
        PrecioMayor: 8500,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: ["Blanco", "Negro"],
    },

    {
        Codigo: "COR43",
        Estado: null,
        Img: "Cordones/COR42-img1",
        Producto: "Ancho Blanco 2cm x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "COR44",
        Estado: null,
        Img: "Cordones/COR42-img1",
        Producto: "Ancho Negro 2cm x72",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Cordones",
        TipoMedida: "Metros",
        Talle: ["1.20"],
        Descripcion: "",
        Color: null,
    },

// -Llaveros

    {
        Codigo: "MODELO00",
        Estado: null,
        Img: "Llaveros/Modelo00-img1",
        Producto: "Pasacinto con Broche",
        PrecioMayor: 4000,
        PrecioMinorista: 2500,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO01",
        Estado: null,
        Img: "Llaveros/Modelo01-img1",
        Producto: "pascinto con adorno",
        PrecioMayor: 4000,
        PrecioMinorista: 3000,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO02",
        Estado: null,
        Img: "Llaveros/Modelo02-img1",
        Producto: "Pasacinto con Mosqueton",
        PrecioMayor: 4000,
        PrecioMinorista: 3500,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO03",
        Estado: null,
        Img: "Llaveros/Modelo03-img1",
        Producto: "pasacinto alambre",
        PrecioMayor: 4000,
        PrecioMinorista: 2500,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO04",
        Estado: null,
        Img: "Llaveros/Modelo04-img1",
        Producto: "pasacinto vigilante",
        PrecioMayor: 4000,
        PrecioMinorista: 3000,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO07",
        Estado: null,
        Img: "Llaveros/Modelo07-img1",
        Producto: "Huevo con Adorno",
        PrecioMayor: 4000,
        PrecioMinorista: 2500,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO08",
        Estado: null,
        Img: "Llaveros/Modelo08-img1",
        Producto: "llavero huevo con dije",
        PrecioMayor: 4000,
        PrecioMinorista: 3500,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO09",
        Estado: null,
        Img: "Llaveros/Modelo09-img1",
        Producto: "Llavero con Adorno",
        PrecioMayor: 4000,
        PrecioMinorista: 3000,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO10",
        Estado: null,
        Img: "Llaveros/Modelo10-img1",
        Producto: "Dije Herradura",
        PrecioMayor: 4000,
        PrecioMinorista: 3000,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO11",
        Estado: null,
        Img: "Llaveros/Modelo11-img1",
        Producto: "Llavero Boca",
        PrecioMayor: 4000,
        PrecioMinorista: 3000,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "MODELO12",
        Estado: null,
        Img: "Llaveros/Modelo12-img1",
        Producto: "Llavero River",
        PrecioMayor: 4000,
        PrecioMinorista: 3000,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "MODELO13",
        Estado: null,
        Img: "Llaveros/Modelo13-img1",
        Producto: "Llavero corto 2 remaches",
        PrecioMayor: 4000,
        PrecioMinorista: 3500,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },
    {
        Codigo: "MODELO14",
        Estado: null,
        Img: "Llaveros/Modelo14-img1",
        Producto: "Llavero corto 1 remache",
        PrecioMayor: 4000,
        PrecioMinorista: 3500,
        Categoria: "Llaveros",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: ["color Bronce","color Plata","Surtido"],
    },

// -Articulo de Perro -------

    {
        Codigo: "ArtiPr01",
        Estado: "Limitado",
        Img: "ArticulosDePerro/ArtiPr01-img1",
        Producto: "Collar de Perro",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Articulos de perro",
        TipoMedida: "Cm",
        Talle: ["Chico: 35cm x 1.5cm", "Mediano: 45cm x 2.0cm", "Grande: 55cm x 2.5cm"],
        Descripcion: null,
        Color: ["Rojo","Azul","Verder","Amarillo","Surtido"],
    },
    {
        Codigo: "ArtiPr02",
        Estado: "Limitado",
        Img: "ArticulosDePerro/ArtiPr02-img1",
        Producto: "Correa de Perro",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Articulos de perro",
        TipoMedida: "Cm",
        Talle: ["Chico 1.2cm x 1.5cm", "Mediano: 1.2cm x 2.0cm", "Grande: 1.2cm x 2.5cm"],
        Descripcion: null,
        Color: ["Rojo","Azul","Verder","Amarillo","Surtido"],
    },
    {
        Codigo: "ArtiPr03",
        Estado: "Limitado",
        Img: "ArticulosDePerro/ArtiPr03-img1",
        Producto: "Pretal de Perro",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Articulos de perro",
        TipoMedida: "Talle",
        Talle: ["Chico", "Mediano", "Grande"],
        Descripcion: null,
        Color: ["Rojo","Azul","Verder","Amarillo","Surtido"],
    },

// -Articulo de calzado-----------asd
{
        Codigo: "ARC01",
        Estado: null,
        Img: "Articulo de calzado/ARC01-img1",
        Producto: "Esponja aplicador Arola",
        PrecioMayor: 1800,
        PrecioMinorista: 3000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC02",
        Estado: null,
        Img: "Articulo de calzado/ARC02-img1",
        Producto: "Cepillo pomada con mango",
        PrecioMayor: 3000,
        PrecioMinorista: 4000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC03",
        Estado: null,
        Img: "Articulo de calzado/ARC03-img1",
        Producto: "Cepillo gamuza",
        PrecioMayor: 3200,
        PrecioMinorista: 5000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Cm",
        Talle: ["8cm"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC04",
        Estado: null,
        Img: "Articulo de calzado/ARC04-img1",
        Producto: "Cepillo gamuza bronce",
        PrecioMayor: 3300,
        PrecioMinorista: 5000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Cm",
        Talle: ["10cm"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC05",
        Estado: null,
        Img: "Articulo de calzado/ARC05-img1",
        Producto: "Cepillo barnizado comun.",
        PrecioMayor: 3700,
        PrecioMinorista: 7000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Cm",
        Talle: ["16cm"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC06",
        Estado: null,
        Img: "Articulo de calzado/ARC06-img1",
        Producto: "Cepillo WASS simil cuero",
        PrecioMayor: 8300,
        PrecioMinorista: 12000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: ["16cm"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC07",
        Estado: null,
        Img: "Articulo de calzado/ARC07-img1",
        Producto: "Cepillos KIT X3. SNEAKER",
        PrecioMayor: 14000,
        PrecioMinorista: 20000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "ARC08",
        Estado: null,
        Img: "Articulo de calzado/ARC08-img1",
        Producto: "Calzador zapato plastico",
        PrecioMayor: 1500,
        PrecioMinorista: 4000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Cm",
        Talle: ["18cm"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC09",
        Estado: null,
        Img: "Articulo de calzado/ARC09-img1",
        Producto: "Arola impermeabilizante",
        PrecioMayor: 9300,
        PrecioMinorista: 15000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "ARC10",
        Estado: null,
        Img: "Articulo de calzado/ARC10-img1",
        Producto: "Pictorian ESTIRADOR gatillo",
        PrecioMayor: 5800,
        PrecioMinorista: 8000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC11",
        Estado: null,
        Img: "Articulo de calzado/ARC11-img1",
        Producto: "Wass pomada líquida",
        PrecioMayor: 4900,
        PrecioMinorista: 8000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: ["Blanca", "Negra", "Marron", "Incoloro"],
    },

    {
        Codigo: "ARC12",
        Estado: null,
        Img: "Articulo de calzado/ARC12-img1",
        Producto: "Arola pomada",
        PrecioMayor: 4900,
        PrecioMinorista: 8000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Peso",
        Talle: ["60g"],
        Descripcion: "",
        Color: ["Marrón", "Choco", "Suela", "Incolor crema", "Negro"],
    },

    {
        Codigo: "ARC13",
        Estado: null,
        Img: "Articulo de calzado/ARC13-img1",
        Producto: "Wass gamuza LIMPIADOR",
        PrecioMayor: 6600,
        PrecioMinorista: 12000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC14",
        Estado: null,
        Img: "Articulo de calzado/ARC14-img1",
        Producto: "Wass renovador gamuza",
        PrecioMayor: 6900,
        PrecioMinorista: 10000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: ["Negro", "Suela", "Incoloro", "Marrón"],
    },

    {
        Codigo: "ARC15",
        Estado: null,
        Img: "Articulo de calzado/ARC15-img1",
        Producto: "Wass esponja mágica",
        PrecioMayor: 4200,
        PrecioMinorista: 7000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: ["Negro", "Marrón", "Incoloro"],
    },

    {
        Codigo: "ARC17",
        Estado: null,
        Img: "Articulo de calzado/ARC17-img1",
        Producto: "Wass espuma SNEAKER limpiador",
        PrecioMayor: null,
        PrecioMinorista: 15000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC19",
        Estado: null,
        Img: "Articulo de calzado/ARC19-img1",
        Producto: "Wass REVITALIZADOR cuero",
        PrecioMayor: 8800,
        PrecioMinorista: 15000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC20",
        Estado: null,
        Img: "Articulo de calzado/ARC20-img1",
        Producto: "Zapp shampu limpiador",
        PrecioMayor: 4800,
        PrecioMinorista: 8000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC21",
        Estado: null,
        Img: "Articulo de calzado/ARC21-img1",
        Producto: "Wass pomada en crema",
        PrecioMayor: 3200,
        PrecioMinorista: 5000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Peso",
        Talle: ["30g"],
        Descripcion: "",
        Color: ["Negro", "Marron", "Incoloro", "Blanca"],
    },

    {
        Codigo: "ARC22",
        Estado: null,
        Img: "Articulo de calzado/ARC22-img1",
        Producto: "Arola pomada vidrio / COLOR",
        PrecioMayor: 6000,
        PrecioMinorista: 10000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Peso",
        Talle: ["60ml"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ARC23",
        Estado: null,
        Img: "Articulo de calzado/ARC23-img1",
        Producto: "Pictorian tinta cuero",
        PrecioMayor: 4200,
        PrecioMinorista: 10000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Peso",
        Talle: ["100ml"],
        Descripcion: "",
        Color: ["Negro", "Marrón", "Verde", "Rojo"],
    },

    {
        Codigo: "ARC24",
        Estado: null,
        Img: "Articulo de calzado/ARC24-img1",
        Producto: "Pictorian tinta gamuza",
        PrecioMayor: 4200,
        PrecioMinorista: 10000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Peso",
        Talle: ["100ml"],
        Descripcion: "",
        Color: [
            "Negro",
            "Hueso",
            "Gris",
            "Azul",
            "Verde Oscuro",
            "Guinda",
            "Marrón",
            "Rojo",
            "Suela",
            "Beige"
        ],
    },

    {
        Codigo: "ARC25",
        Estado: null,
        Img: "Articulo de calzado/ARC25-img1",
        Producto: "Pictorian tinta lona",
        PrecioMayor: 4200,
        PrecioMinorista: 10000,
        Categoria: "Articulo de calzado",
        TipoMedida: "Peso",
        Talle: ["100ml"],
        Descripcion: "",
        Color: ["Negro", "Blanco", "Rojo", "Azul"],
    },

    {
        Codigo: "ARC26",
        Estado: null,
        Img: "Articulo de calzado/ARC26-img1",
        Producto: "Wass desodorante PUFF",
        PrecioMayor: null,
        PrecioMinorista: 15000,
        Categoria: "Articulo de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

// -Accesorio de calzado------------------------
{
        Codigo: "ACC01",
        Estado: null,
        Img: "Accesorio de calzado/ACC01-img1",
        Producto: "separador dedos",
        PrecioMayor: 2500,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC02",
        Estado: null,
        Img: "Accesorio de calzado/ACC02-img1",
        Producto: "silicona corrector juanete",
        PrecioMayor: 2500,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC03",
        Estado: null,
        Img: "Accesorio de calzado/ACC03-img1",
        Producto: "silicona protector talon",
        PrecioMayor: 4600,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    // {
    //     Codigo: "ACC04",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC04-img1",
    //     Producto: "salvamedias silicona",
    //     PrecioMayor: 2000,
    //     PrecioMinorista: 6000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

    {
        Codigo: "ACC05",
        Estado: null,
        Img: "Accesorio de calzado/ACC05-img1",
        Producto: "silicona protector metatarso",
        PrecioMayor: 4400,
        PrecioMinorista: 5000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC06",
        Estado: null,
        Img: "Accesorio de calzado/ACC06-img1",
        Producto: "silicona talonera",
        PrecioMayor: 4000,
        PrecioMinorista: 8000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC07",
        Estado: null,
        Img: "Accesorio de calzado/ACC07-img1",
        Producto: "talonera LATEX 3CM",
        PrecioMayor: 6000,
        PrecioMinorista: 12000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC08",
        Estado: null,
        Img: "Accesorio de calzado/ACC08-img1",
        Producto: "Media Siliconada",
        PrecioMayor: 3800,
        PrecioMinorista: 8000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC09",
        Estado: null,
        Img: "Accesorio de calzado/ACC09-img1",
        Producto: "Plantillas Silicona tacones",
        PrecioMayor: 4200,
        PrecioMinorista: null,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC10",
        Estado: null,
        Img: "Accesorio de calzado/ACC10-img1",
        Producto: "salvamedias Adesiva",
        PrecioMayor: 1800,
        PrecioMinorista: 5000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC11",
        Estado: null,
        Img: "Accesorio de calzado/ACC11-img1",
        Producto: "salvamedias silicona",
        PrecioMayor: 2000,
        PrecioMinorista: 5000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC12",
        Estado: null,
        Img: "Accesorio de calzado/ACC12-img1",
        Producto: "silicona puntera ballet",
        PrecioMayor: 2800,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC13",
        Estado: null,
        Img: "Accesorio de calzado/ACC13-img1",
        Producto: "silicona metatarso protector RED",
        PrecioMayor: 2600,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    // {
    //     Codigo: "ACC14",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC14-img1",
    //     Producto: "silicona separador dedos",
    //     PrecioMayor: null,
    //     PrecioMinorista: 5000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

    {
        Codigo: "ACC15",
        Estado: null,
        Img: "Accesorio de calzado/ACC15-img1",
        Producto: "talonera. LATEX",
        PrecioMayor: 3600,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC16",
        Estado: null,
        Img: "Accesorio de calzado/ACC16-img1",
        Producto: "silicona elevadora Talón 3cm",
        PrecioMayor: 8200,
        PrecioMinorista: 15000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    // {
    //     Codigo: "ACC17",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC17-img1",
    //     Producto: "silicona protector dedos ancho x2",
    //     PrecioMayor: null,
    //     PrecioMinorista: 5000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

    {
        Codigo: "ACC18",
        Estado: null,
        Img: "Accesorio de calzado/ACC18-img1",
        Producto: "protector dedos pack",
        PrecioMayor: 3500,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC19",
        Estado: null,
        Img: "Accesorio de calzado/ACC19-img1",
        Producto: "protector metatarsal + separador dedos",
        PrecioMayor: 3000,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC20",
        Estado: null,
        Img: "Accesorio de calzado/ACC20-img1",
        Producto: "adhesivo CURITA × 7 piezas",
        PrecioMayor: 2500,
        PrecioMinorista: 5000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC21",
        Estado: null,
        Img: "Accesorio de calzado/ACC21-img1",
        Producto: "plantilla silicona tacones",
        PrecioMayor: null,
        PrecioMinorista: 10000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC22",
        Estado: null,
        Img: "Accesorio de calzado/ACC22-img1",
        Producto: "Talonera leal media plantilla",
        PrecioMayor: 4000,
        PrecioMinorista: 7000,
        Categoria: "Accesorio de calzado",
        TipoMedida: "Tamaños",
        Talle: ["Chica", "Mediana", "Grande"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC23",
        Estado: null,
        Img: "Accesorio de calzado/ACC23-img1",
        Producto: "leal almohadilla",
        PrecioMayor: 3500,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC24",
        Estado: null,
        Img: "Accesorio de calzado/ACC24-img1",
        Producto: "silicona arco concavo",
        PrecioMayor: 4400,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC25",
        Estado: null,
        Img: "Accesorio de calzado/ACC25-img1",
        Producto: "curita/almoadilla",
        PrecioMayor: 3200,
        PrecioMinorista: 7000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC26",
        Estado: null,
        Img: "Accesorio de calzado/ACC26-img1",
        Producto: "protector SILICONA TOPE X 6",
        PrecioMayor: 2000,
        PrecioMinorista: 5000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC27",
        Estado: null,
        Img: "Accesorio de calzado/ACC27-img1",
        Producto: "férula corrector juanete",
        PrecioMayor: 4000,
        PrecioMinorista: 8000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC28",
        Estado: null,
        Img: "Accesorio de calzado/ACC28-img1",
        Producto: "Silicona protector dedos x 5",
        PrecioMayor: 2800,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC29",
        Estado: null,
        Img: "Accesorio de calzado/ACC29-img1",
        Producto: "almohadilla de espuma metatarso",
        PrecioMayor: 2800,
        PrecioMinorista: 6000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC30",
        Estado: null,
        Img: "Accesorio de calzado/ACC30-img1",
        Producto: "rodillera silicona magnéticas",
        PrecioMayor: 4600,
        PrecioMinorista: 10000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC31",
        Estado: null,
        Img: "Accesorio de calzado/ACC31-img1",
        Producto: "silicona metatarso magnetica x 2",
        PrecioMayor: 4400,
        PrecioMinorista: 8000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    // {
    //     Codigo: "ACC32",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC32-img1",
    //     Producto: "plantisuela para metatarso cuero",
    //     PrecioMayor: 4200,
    //     PrecioMinorista: 8000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

    // {
    //     Codigo: "ACC33",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC33-img1",
    //     Producto: "almohadilla con talon metatarso",
    //     PrecioMayor: 1500,
    //     PrecioMinorista: 5000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

    // {
    //     Codigo: "ACC34",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC34-img1",
    //     Producto: "almohadilla silicona metatarso",
    //     PrecioMayor: 2800,
    //     PrecioMinorista: 7000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

    {
        Codigo: "ACC35",
        Estado: null,
        Img: "Accesorio de calzado/ACC35-img1",
        Producto: "talonera leal × 3 talles",
        PrecioMayor: 4600,
        PrecioMinorista: 8000,
        Categoria: "Accesorio de calzado",
        TipoMedida: "Tamaños",
        Talle: ["Chica", "Mediana", "Grande"],
        Descripcion: "",
        Color: null,
    },

    {
        Codigo: "ACC36",
        Estado: null,
        Img: "Accesorio de calzado/ACC36-img1",
        Producto: "siliciona media soquete",
        PrecioMayor: 6000,
        PrecioMinorista: 10000,
        Categoria: "Accesorio de calzado",
        TipoMedida: null,
        Talle: null,
        Descripcion: "",
        Color: null,
    },

    // {
    //     Codigo: "ACC37",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC37-img1",
    //     Producto: "silicona corrector dedo garra /martillo",
    //     PrecioMayor: 2800,
    //     PrecioMinorista: 6000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

    // {
    //     Codigo: "ACC38",
    //     Estado: null,
    //     Img: "Accesorio de calzado/ACC38-img1",
    //     Producto: "Silicona Tope Separador",
    //     PrecioMayor: 2800,
    //     PrecioMinorista: 6000,
    //     Categoria: "Accesorio de calzado",
    //     TipoMedida: null,
    //     Talle: null,
    //     Descripcion: "",
    //     Color: null,
    // },

// -Medias------------------------
    {
        Codigo: "M01",
        Estado: null,
        Img: "Medias/M01-img1",
        Producto: "Soquete Termico x12",
        PrecioMayor: 10500,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M02",
        Estado: null,
        Img: "Medias/M02-img1",
        Producto: "Soquete x12",
        PrecioMayor: 3500,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M03",
        Estado: null,
        Img: "Medias/M03-img1",
        Producto: "AntiDeslizantes 1/4 x12",
        PrecioMayor: 22000,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M04",
        Estado: null,
        Img: "Medias/M04-img1",
        Producto: "AntiDeslizantes Largas x12",
        PrecioMayor: 25000,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M05",
        Estado: null,
        Img: "Medias/M05-img1",
        Producto: "Tenis x12",
        PrecioMayor: 18000,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M06",
        Estado: null,
        Img: "Medias/M06-img1",
        Producto: "Termica Piel x12",
        PrecioMayor: 10000,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M07",
        Estado: null,
        Img: "Medias/M07-img1",
        Producto: "Soquete Invisible x12",
        PrecioMayor: 3500,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M08",
        Estado: null,
        Img: "Medias/M08-img1",
        Producto: "Medias Aitana x12",
        PrecioMayor: 10500,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "M09",
        Estado: null,
        Img: "Medias/M09-img1",
        Producto: "Altomax Varón 3/4",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M10",
        Estado: null,
        Img: "Medias/M10-img1",
        Producto: "Media MD Dama/Varón 3/4",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M11",
        Estado: null,
        Img: "Medias/M11-img1",
        Producto: "Super Balance Dama 3/4",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M12",
        Estado: null,
        Img: "Medias/M12-img1",
        Producto: "SB Varon 3/4",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M13",
        Estado: null,
        Img: "Medias/M13-img1",
        Producto: "Deportiva Antideslizante Corta",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M14",
        Estado: null,
        Img: "Medias/M14-img1",
        Producto: "Deportiva Antideslizante Larga",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M15",
        Estado: null,
        Img: "Medias/M15-img1",
        Producto: "Media Invisible Dama/Varón",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M16",
        Estado: null,
        Img: "Medias/M16-img1",
        Producto: "Soque Alto MD Dama/Varón",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M17",
        Estado: null,
        Img: "Medias/M17-img1",
        Producto: "Soque Alto Men Varón",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M18",
        Estado: null,
        Img: "Medias/M18-img1",
        Producto: "SoqueAlto SBalance Dama/Varón",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M19",
        Estado: null,
        Img: "Medias/M19-img1",
        Producto: "Soque M Dama",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M20",
        Estado: null,
        Img: "Medias/M20-img1",
        Producto: "Soque SBalance Dama",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M21",
        Estado: null,
        Img: "Medias/M21-img1",
        Producto: "Soque Socmark Dama",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M22",
        Estado: null,
        Img: "Medias/M22-img1",
        Producto: "Termico Sbalanse Dama/Varón",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M23",
        Estado: null,
        Img: "Medias/M23-img1",
        Producto: "Soquete Varón",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M24",
        Estado: null,
        Img: "Medias/M24-img1",
        Producto: "Soquete ViMas Dama",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "M25",
        Estado: null,
        Img: "Medias/M25-img1",
        Producto: "Termica Piel",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Medias",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },

    {
        Codigo: "VE01",
        Estado: null,
        Img: "Vestimenta/VE01-img1",
        Producto: "Calza Corta deportiva",
        PrecioMayor: 14000,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: "Talle",
        Talle: ["S/M", "L/XL"],
        Descripcion: "Consultar por Docena.   Talles:S/M - L/XL   Colores: Consultar",
        Color: null,
    },
    {
        Codigo: "VE02",
        Estado: null,
        Img: "Vestimenta/VE02-img1",
        Producto: "Calza deportiva lisa",
        PrecioMayor: 12000,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: null,
        Talle: null,
        Descripcion: "Calza deportiva lisa con funce",
        Color: null,
    },
    {
        Codigo: "VE03",
        Estado: null,
        Img: "Vestimenta/VE03-img1",
        Producto: "Calza efecto piel",
        PrecioMayor: 10000,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: null,
        Talle: null,
        Descripcion: null,
        Color: null,
    },
    {
        Codigo: "VE04",
        Estado: null,
        Img: "Vestimenta/VE04-img1",
        Producto: "Cocot Medias 3/4 Mulifilamento",
        PrecioMayor: 5000,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: null,
        Talle: null,
        Descripcion: "Un pack de 2 pares x 5000$ Colores: Negro - Tostado - Natural",
        Color: ["Negro", "Tostado", "Natural", "Surtido"],
    },
    {
        Codigo: "VE05",
        Estado: null,
        Img: "Vestimenta/VE05-img1",
        Producto: "MX PantiMedia",
        PrecioMayor: 6000,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: null,
        Talle: null,
        Descripcion: "Colores: Tostado - Negro - Natural",
        Color: ["Tostado", "Negro", "Natural"],
    },
    {
        Codigo: "VE06",
        Estado: null,
        Img: "Vestimenta/VE06-img1",
        Producto: "PantiMedia Común",
        PrecioMayor: 2500,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: null,
        Talle: null,
        Descripcion: "Unico color el de la imagen. ¡Un pack de 3pares x2500$!",
        Color: null,
    },
    {
        Codigo: "VE07",
        Estado: null,
        Img: "Vestimenta/VE07-img1",
        Producto: "Top Smart sexy",
        PrecioMayor: 6000,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: "Talle",
        Talle: ["M/L", "XL/XXL"],
        Descripcion: "Consultar por Docena y Colores",
        Color: null,
    },
    {
        Codigo: "VE08",
        Estado: null,
        Img: "Vestimenta/VE08-img1",
        Producto: "Conjunto Sakali",
        PrecioMayor: null,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: "Talle",
        Talle: ["XL"],
        Descripcion: "Consultar por Docena.   Colores: Verde Fluor - Violeta - Verde Pastel - Naranja - Azul - Gris - Negro",
        Color: [
            "Verde Fluor",
            "Violeta",
            "Verde Pastel",
            "Naranja",
            "Azul",
            "Gris",
            "Negro",
            "Surtido"
        ],
    },
    {
        Codigo: "VE09",
        Estado: null,
        Img: "Vestimenta/VE09-img1",
        Producto: "Top D´lirio",
        PrecioMayor: 7500,
        PrecioMinorista: null,
        Categoria: "Vestimenta",
        TipoMedida: "Talle",
        Talle: ["L/XL", "XXL/XXXL"],
        Descripcion: "Consultar por Docena.   Colores: Rosa - Gris - Negro - Azul - Fucsia",
        Color: [
            "Rosa",
            "Gris",
            "Negro",
            "Azul",
            "Fucsia",
            "Surtido"
        ],
    },
];

//-----------------------------------------------------------------------
//-------  -------  ---------   --------             -----------------------------------------
//-------  -------    ------    -------  ---------------------------------------------
//-------  -------  -  ----  -  ------  ----------------------------------------------
//-------  -------  --  --  --  ------  ----------------------------------------------
//-------  -------  ---    ---  ------  -----         ----------------------------------------
//-------  -------  ----------  ------  -----  -----  ----------------------------
//-------  -------  ----------  ------  ------------  -----------------------------
//-------  -------  ----------  ------  -----------  -----------------------------
//-------  -------  ----------  --------            ------------------------------------
//-----------------------------------------------------------------------
const TodasImg = [
    {
        codigo: "P01",
        Imagenes: [
            "Plantillas/P01-img1",
            "Plantillas/P01-img2",
            "Plantillas/P01-img3",
            "Plantillas/P01-img4",
        ],
    },
    {
        codigo: "P02",
        Imagenes: [
            "Plantillas/P02-img1",
            "Plantillas/P02-img2",
            "Plantillas/P02-img3",
            "Plantillas/P02-img4",
        ],
    },
    {
        codigo: "P03",
        Imagenes: [
            "Plantillas/P03-img1",
            "Plantillas/P03-img2",
            "Plantillas/P03-img3",
        ],
    },
    {
        codigo: "P04",
        Imagenes: [
            "Plantillas/P04-img1",
            "Plantillas/P04-img2",
            "Plantillas/P04-img3",
        ],
    },
    {
        codigo: "P05",
        Imagenes: [
            "Plantillas/P05-img1",
            "Plantillas/P05-img2",
        ],
    },
    {
        codigo: "P06",
        Imagenes: [
            "Plantillas/P06-img1",
            "Plantillas/P06-img2",
            "Plantillas/P06-img3",
            "Plantillas/P06-img4",
        ],
    },
    {
        codigo: "P07",
        Imagenes: [
            "Plantillas/P07-img1",
            "Plantillas/P07-img2",
            "Plantillas/P07-img3",
        ],
    },
    {
        codigo: "P08",
        Imagenes: [
            "Plantillas/P08-img1",
            "Plantillas/P08-img2",
            "Plantillas/P08-img3",
            "Plantillas/P08-img4",
        ],
    },
    {
        codigo: "P09",
        Imagenes: [
            "Plantillas/P09-img1",
            "Plantillas/P09-img2",
            "Plantillas/P09-img3",
            "Plantillas/P09-img4",
        ],
    },
    {
        codigo: "P10",
        Imagenes: [
            "Plantillas/P10-img1",
            "Plantillas/P10-img2",
            "Plantillas/P10-img3",
            "Plantillas/P10-img4",
        ],
    },
    {
        codigo: "P11",
        Imagenes: [
            "Plantillas/P11-img1",
            "Plantillas/P11-img2",
            "Plantillas/P11-img3",
            "Plantillas/P11-img4",
        ],
    },
    {
        codigo: "P12",
        Imagenes: [
            "Plantillas/P12-img1",
            "Plantillas/P12-img2",
            "Plantillas/P12-img3",
        ],
    },
    {
        codigo: "P13",
        Imagenes: [
            "Plantillas/P13-img1",
            "Plantillas/P13-img2",
        ],
    },
    {
        codigo: "P14",
        Imagenes: [
            "Plantillas/P14-img1",
            "Plantillas/P14-img2",
            "Plantillas/P14-img3",
        ],
    },
    {
        codigo: "P15",
        Imagenes: [
            "Plantillas/P15-img1",
            "Plantillas/P15-img2",
            "Plantillas/P15-img3",
        ],
    },
    {
        codigo: "P16",
        Imagenes: [
            "Plantillas/P16-img1",
            "Plantillas/P16-img2",
            "Plantillas/P16-img3",
        ],
    },
    {
        codigo: "P17",
        Imagenes: [
            "Plantillas/P17-img1",
            "Plantillas/P17-img2",
            "Plantillas/P17-img3",
            "Plantillas/P17-img4", 
        ],
    },
    {
        codigo: "P18",
        Imagenes: [
            "Plantillas/P18-img1",
            "Plantillas/P18-img2",
            "Plantillas/P18-img3", 
        ],
    },
    {
        codigo: "P19",
        Imagenes: [
            "Plantillas/P19-img1",
            "Plantillas/P19-img2",
            "Plantillas/P19-img3",
            "Plantillas/P19-img4", 
        ],
    },
    {
        codigo: "P20",
        Imagenes: [
            "Plantillas/P20-img1",
            "Plantillas/P20-img2",
        ],
    },

// -Cordones
    {
        codigo: "COR01",
        Imagenes: [
            "Cordones/COR01-img1",
        ]
    },
    {
        codigo: "COR02",
        Imagenes: [
            "Cordones/COR02-img1",
            "Cordones/COR02-img2"
        ]
    },
    {
        codigo: "COR03",
        Imagenes: [
            "Cordones/COR01-img1",
        ]
    },
    {
        codigo: "COR04",
        Imagenes: [
            "Cordones/COR01-img1",
        ]
    },
    {
        codigo: "COR05",
        Imagenes: [
            "Cordones/COR02-img2",
            "Cordones/COR02-img1",
        ]
    },
    {
        codigo: "COR06",
        Imagenes: [
            "Cordones/COR06-img1",
        ]
    },
    {
        codigo: "COR07",
        Imagenes: [
            "Cordones/COR07-img1",
        ]
    },
    {
        codigo: "COR08",
        Imagenes: [
            "Cordones/COR06-img1",
        ]
    },
    {
        codigo: "COR09",
        Imagenes: [
            "Cordones/COR06-img1",
        ]
    },
    {
        codigo: "COR10",
        Imagenes: [
            "Cordones/COR7-img2",
            "Cordones/COR7-img1",
        ]
    },
    {
        codigo: "COR11",
        Imagenes: [
            "Cordones/COR11-img1",
        ]
    },
    {
        codigo: "COR12",
        Imagenes: [
            "Cordones/COR12-img1",
            "Cordones/COR12-img2"
        ]
    },
    {
        codigo: "COR13",
        Imagenes: [
            "Cordones/COR11-img1",
        ]
    },
    {
        codigo: "COR14",
        Imagenes: [
            "Cordones/COR11-img1",
        ]
    },
    {
        codigo: "COR15",
        Imagenes: [
            "Cordones/COR12-img2",
            "Cordones/COR12-img1"
        ]
    },
    {
        codigo: "COR16",
        Imagenes: [
            "Cordones/COR16-img1",
        ]
    },
    {
        codigo: "COR17",
        Imagenes: [
            "Cordones/COR17-img1",
            "Cordones/COR17-img2"
        ]
    },
    {
        codigo: "COR18",
        Imagenes: [
            "Cordones/COR16-img1",
        ]
    },
    {
        codigo: "COR19",
        Imagenes: [
            "Cordones/COR16-img1",
        ]
    },
    {
        codigo: "COR20",
        Imagenes: [
            "Cordones/COR17-img2",
            "Cordones/COR17-img1"
        ]
    },
    {
        codigo: "COR21",
        Imagenes: [
            "Cordones/COR21-img1",
        ]
    },
    //{
    //    codigo: "COR22",
    //    Imagenes: [
    //        "Cordones/COR21-img1",
    //    ]
    //},
    {
        codigo: "COR23",
        Imagenes: [
            "Cordones/COR21-img1",
        ]
    },
    {
        codigo: "COR24",
        Imagenes: [
            "Cordones/COR24-img1",
            "Cordones/COR24-img2"
        ]
    },
    //{
    //    codigo: "COR25",
    //    Imagenes: [
    //        "Cordones/COR25-img1",
    //        "Cordones/COR25-img2"
    //    ]
    //},
    {
        codigo: "COR26",
        Imagenes: [
            "Cordones/COR26-img1",
        ]
    },
    {
        codigo: "COR27",
        Imagenes: [
            "Cordones/COR26-img1",
        ]
    },
    {
        codigo: "COR28",
        Imagenes: [
            "Cordones/COR26-img1",
        ]
    },
    {
        codigo: "COR29",
        Imagenes: [
            "Cordones/COR26-img1",
        ]
    },
    {
        codigo: "COR30",
        Imagenes: [
            "Cordones/COR26-img1",
        ]
    },
    {
        codigo: "COR31",
        Imagenes: [
            "Cordones/COR31-img1",
            "Cordones/COR31-img2"
        ]
    },
    {
        codigo: "COR32",
        Imagenes: [
            "Cordones/COR32-img1",
            "Cordones/COR32-img2"
        ]
    },
    {
        codigo: "COR33",
        Imagenes: [
            "Cordones/COR32-img2",
            "Cordones/COR32-img1"
        ]
    },
    {
        codigo: "COR34",
        Imagenes: [
            "Cordones/COR34-img1",
        ]
    },
    {
        codigo: "COR35",
        Imagenes: [
            "Cordones/COR35-img1",
        ]
    },
    {
        codigo: "COR36",
        Imagenes: [
            "Cordones/COR36-img1",
        ]
    },
    {
        codigo: "COR37",
        Imagenes: [
            "Cordones/COR36-img1",
        ]
    },
    {
        codigo: "COR38",
        Imagenes: [
            "Cordones/COR38-img1",
            "Cordones/COR38-img2"
        ]
    },
    {
        codigo: "COR39",
        Imagenes: [
            "Cordones/COR39-img1",
        ]
    },
    {
        codigo: "COR40",
        Imagenes: [
            "Cordones/COR39-img1",
        ]
    },
    {
        codigo: "COR41",
        Imagenes: [
            "Cordones/COR39-img1",
        ]
    },
    {
        codigo: "COR42",
        Imagenes: [
            "Cordones/COR42-img1",
        ]
    },
    {
        codigo: "COR43",
        Imagenes: [
            "Cordones/COR42-img1",
        ]
    },
    {
        codigo: "COR44",
        Imagenes: [
            "Cordones/COR42-img1",
        ]
    },
    
// -Llaveros--------------------

    {
        codigo: "MODELO00",
        Imagenes: [
            "Llaveros/Modelo00-img1",
            "Llaveros/Modelo00-img2",
            "Llaveros/Modelo00-img3",
        ],
    },
    {
        codigo: "MODELO01",
        Imagenes: [
            "Llaveros/Modelo01-img1",
            "Llaveros/Modelo01-img2",
            "Llaveros/Modelo01-img3",
        ],
    },
    {
        codigo: "MODELO02",
        Imagenes: [
            "Llaveros/Modelo02-img1",
            "Llaveros/Modelo02-img2",
        ],
    },
    {
        codigo: "MODELO03",
        Imagenes: [
            "Llaveros/Modelo03-img1",
            "Llaveros/Modelo03-img2",
            "Llaveros/Modelo03-img3",
        ],
    },
    {
        codigo: "MODELO04",
        Imagenes: [
            "Llaveros/Modelo04-img1",
            "Llaveros/Modelo04-img2",
            "Llaveros/Modelo04-img3",
        ],
    },
    {
        codigo: "MODELO07",
        Imagenes: [
            "Llaveros/Modelo07-img1",
            "Llaveros/Modelo07-img2",
            "Llaveros/Modelo07-img3",
        ],
    },
    {
        codigo: "MODELO08",
        Imagenes: [
            "Llaveros/Modelo08-img1",
            "Llaveros/Modelo08-img2",
            "Llaveros/Modelo08-img3",
        ],
    },
    {
        codigo: "MODELO09",
        Imagenes: [
            
            "Llaveros/Modelo09-img1",
            "Llaveros/Modelo09-img2",
            "Llaveros/Modelo09-img3",
            "Llaveros/Modelo09-img4",
            "Llaveros/Modelo09-img5",
            "Llaveros/Modelo09-img6",
        ],
    },
    {
        codigo: "MODELO10",
        Imagenes: [
            "Llaveros/Modelo10-img1",
            "Llaveros/Modelo10-img2",
            "Llaveros/Modelo10-img3",
        ],
    },
    {
        codigo: "MODELO11",
        Imagenes: [
            "Llaveros/Modelo11-img1",
        ],
    },
    {
        codigo: "MODELO12",
        Imagenes: [
            "Llaveros/Modelo12-img1",
        ],
    },
    {
        codigo: "MODELO13",
        Imagenes: [
            "Llaveros/Modelo13-img1",
            "Llaveros/Modelo13-img2",
            "Llaveros/Modelo13-img3",
        ],
    },
    {
        codigo: "MODELO14",
        Imagenes: [
            "Llaveros/Modelo14-img1",
            "Llaveros/Modelo14-img2",
            "Llaveros/Modelo14-img3",
        ],
    },
// -Articulo de Perros
    {
        codigo: "ArtiPr01",
        Imagenes: [
            "ArticulosDePerro/ArtiPr01-img1",
            "ArticulosDePerro/ArtiPr01-img2",
        ],
    },
    {
        codigo: "ArtiPr02",
        Imagenes: [
            "ArticulosDePerro/ArtiPr02-img1",
            "ArticulosDePerro/ArtiPr02-img2",
            "ArticulosDePerro/ArtiPr02-img3",
            "ArticulosDePerro/ArtiPr02-img4",
        ],
    },
    {
        codigo: "ArtiPr03",
        Imagenes: [
            "ArticulosDePerro/ArtiPr03-img1",
            "ArticulosDePerro/ArtiPr03-img2",
            "ArticulosDePerro/ArtiPr03-img3",
            "ArticulosDePerro/ArtiPr03-img4",
        ],
    },
// -Articulos de calzado--
    {
        codigo: "ARC01",
        Imagenes: [
            "Articulo de calzado/ARC01-img1",
        ]
    },
    {
        codigo: "ARC02",
        Imagenes: [
            "Articulo de calzado/ARC02-img1",
            "Articulo de calzado/ARC02-img2",
        ]
    },
    {
        codigo: "ARC03",
        Imagenes: [
            "Articulo de calzado/ARC03-img1",
            "Articulo de calzado/ARC03-img2",
        ]
    },
    {
        codigo: "ARC04",
        Imagenes: [
            "Articulo de calzado/ARC04-img1",
        ]
    },
    {
        codigo: "ARC05",
        Imagenes: [
            "Articulo de calzado/ARC05-img1",
        ]
    },
    {
        codigo: "ARC06",
        Imagenes: [
            "Articulo de calzado/ARC06-img1",
            "Articulo de calzado/ARC06-img2",
            "Articulo de calzado/ARC06-img3"
        ]
    },
    {
        codigo: "ARC07",
        Imagenes: [
            "Articulo de calzado/ARC07-img1",
        ]
    },
    {
        codigo: "ARC08",
        Imagenes: [
            "Articulo de calzado/ARC08-img1",
        ]
    },
    {
        codigo: "ARC09",
        Imagenes: [
            "Articulo de calzado/ARC09-img1",
            "Articulo de calzado/ARC09-img2",
            "Articulo de calzado/ARC09-img3"
        ]
    },
    {
        codigo: "ARC10",
        Imagenes: [
            "Articulo de calzado/ARC10-img1",
            "Articulo de calzado/ARC10-img2",
        ]
    },
    {
        codigo: "ARC11",
        Imagenes: [
            "Articulo de calzado/ARC11-img1",
            "Articulo de calzado/ARC11-img2",
            "Articulo de calzado/ARC11-img3"
        ]
    },
    {
        codigo: "ARC12",
        Imagenes: [
            "Articulo de calzado/ARC12-img1",
            "Articulo de calzado/ARC12-img2",
        ]
    },
    {
        codigo: "ARC13",
        Imagenes: [
            "Articulo de calzado/ARC13-img1",
            "Articulo de calzado/ARC13-img2",
        ]
    },
    {
        codigo: "ARC14",
        Imagenes: [
            "Articulo de calzado/ARC14-img1",
            "Articulo de calzado/ARC14-img2",
        ]
    },
    {
        codigo: "ARC15",
        Imagenes: [
            "Articulo de calzado/ARC15-img1",
            "Articulo de calzado/ARC15-img2",
            "Articulo de calzado/ARC15-img3",
            "Articulo de calzado/ARC15-img4"
        ]
    },
    {
        codigo: "ARC17",
        Imagenes: [
            "Articulo de calzado/ARC17-img1",
            "Articulo de calzado/ARC17-img2",
        ]
    },
    //{
    //    codigo: "ARC18",
    //    Imagenes: [
    //        "Articulo de calzado/ARC18-img1",
    //        "Articulo de calzado/ARC18-img2",
    //        "Articulo de calzado/ARC18-img3"
    //    ]
    //},
    {
        codigo: "ARC19",
        Imagenes: [
            "Articulo de calzado/ARC19-img1",
            "Articulo de calzado/ARC19-img2",
        ]
    },
    {
        codigo: "ARC20",
        Imagenes: [
            "Articulo de calzado/ARC20-img1",
            "Articulo de calzado/ARC20-img2",
        ]
    },
    {
        codigo: "ARC21",
        Imagenes: [
            "Articulo de calzado/ARC21-img1",
            "Articulo de calzado/ARC21-img2",
        ]
    },
    {
        codigo: "ARC22",
        Imagenes: [
            "Articulo de calzado/ARC22-img1",
        ]
    },
    {
        codigo: "ARC23",
        Imagenes: [
            "Articulo de calzado/ARC23-img1",
            "Articulo de calzado/ARC23-img2",
        ]
    },
    {
        codigo: "ARC24",
        Imagenes: [
            "Articulo de calzado/ARC24-img1",
            "Articulo de calzado/ARC24-img2",
            "Articulo de calzado/ARC24-img3"
        ]
    },
    {
        codigo: "ARC25",
        Imagenes: [
            "Articulo de calzado/ARC25-img1",
        ]
    },
    {
        codigo: "ARC26",
        Imagenes: [
            "Articulo de calzado/ARC26-img1",
            "Articulo de calzado/ARC26-img2",
        ]
    },

// -Accesorio de calzado------------------------
{
        codigo: "ACC01",
        Imagenes: [
            "Accesorio de calzado/ACC01-img1",
            "Accesorio de calzado/ACC01-img2"
        ]
    },
    {
        codigo: "ACC02",
        Imagenes: [
            "Accesorio de calzado/ACC02-img1",
            "Accesorio de calzado/ACC02-img2"
        ]
    },
    {
        codigo: "ACC03",
        Imagenes: [
            "Accesorio de calzado/ACC03-img1",
            "Accesorio de calzado/ACC03-img2"
        ]
    },
    {
        codigo: "ACC04",
        Imagenes: [
            "Accesorio de calzado/ACC04-img1"
        ]
    },
    {
        codigo: "ACC05",
        Imagenes: [
            "Accesorio de calzado/ACC05-img1",
            "Accesorio de calzado/ACC05-img2"
        ]
    },
    {
        codigo: "ACC06",
        Imagenes: [
            "Accesorio de calzado/ACC06-img1",
            "Accesorio de calzado/ACC06-img2"
        ]
    },
    {
        codigo: "ACC07",
        Imagenes: [
            "Accesorio de calzado/ACC07-img1",
            "Accesorio de calzado/ACC07-img2"
        ]
    },
    {
        codigo: "ACC08",
        Imagenes: [
            "Accesorio de calzado/ACC08-img1",
            "Accesorio de calzado/ACC08-img2"
        ]
    },
    {
        codigo: "ACC09",
        Imagenes: [
            "Accesorio de calzado/ACC09-img1",
            "Accesorio de calzado/ACC09-img2",
            "Accesorio de calzado/ACC09-img3"
        ]
    },
    {
        codigo: "ACC10",
        Imagenes: [
            "Accesorio de calzado/ACC10-img1"
        ]
    },
    {
        codigo: "ACC11",
        Imagenes: [
            "Accesorio de calzado/ACC11-img1"
        ]
    },
    {
        codigo: "ACC12",
        Imagenes: [
            "Accesorio de calzado/ACC12-img1",
            "Accesorio de calzado/ACC12-img2"
        ]
    },
    {
        codigo: "ACC13",
        Imagenes: [
            "Accesorio de calzado/ACC13-img1",
            "Accesorio de calzado/ACC13-img2"
        ]
    },
    {
        codigo: "ACC14",
        Imagenes: [
            "Accesorio de calzado/ACC14-img1"
        ]
    },
    {
        codigo: "ACC15",
        Imagenes: [
            "Accesorio de calzado/ACC15-img1"
        ]
    },
    {
        codigo: "ACC16",
        Imagenes: [
            "Accesorio de calzado/ACC16-img1"
        ]
    },
    {
        codigo: "ACC17",
        Imagenes: [
            "Accesorio de calzado/ACC17-img1"
        ]
    },
    {
        codigo: "ACC18",
        Imagenes: [
            "Accesorio de calzado/ACC18-img1",
            "Accesorio de calzado/ACC18-img2"
        ]
    },
    {
        codigo: "ACC19",
        Imagenes: [
            "Accesorio de calzado/ACC19-img1",
            "Accesorio de calzado/ACC19-img2"
        ]
    },
    {
        codigo: "ACC20",
        Imagenes: [
            "Accesorio de calzado/ACC20-img1"
        ]
    },
    {
        codigo: "ACC21",
        Imagenes: [
            "Accesorio de calzado/ACC21-img1"
        ]
    },
    {
        codigo: "ACC22",
        Imagenes: [
            "Accesorio de calzado/ACC22-img1"
        ]
    },
    {
        codigo: "ACC23",
        Imagenes: [
            "Accesorio de calzado/ACC23-img1",
            "Accesorio de calzado/ACC23-img2"
        ]
    },
    {
        codigo: "ACC24",
        Imagenes: [
            "Accesorio de calzado/ACC24-img1",
            "Accesorio de calzado/ACC24-img2"
        ]
    },
    {
        codigo: "ACC25",
        Imagenes: [
            "Accesorio de calzado/ACC25-img1"
        ]
    },
    {
        codigo: "ACC26",
        Imagenes: [
            "Accesorio de calzado/ACC26-img1",
            "Accesorio de calzado/ACC26-img2"
        ]
    },
    {
        codigo: "ACC27",
        Imagenes: [
            "Accesorio de calzado/ACC27-img1",
            "Accesorio de calzado/ACC27-img2"
        ]
    },
    {
        codigo: "ACC28",
        Imagenes: [
            "Accesorio de calzado/ACC28-img1"
        ]
    },
    {
        codigo: "ACC29",
        Imagenes: [
            "Accesorio de calzado/ACC29-img1",
            "Accesorio de calzado/ACC29-img2"
        ]
    },
    {
        codigo: "ACC30",
        Imagenes: [
            "Accesorio de calzado/ACC30-img1",
            "Accesorio de calzado/ACC30-img2"
        ]
    },
    {
        codigo: "ACC31",
        Imagenes: [
            "Accesorio de calzado/ACC31-img1"
        ]
    },
    {
        codigo: "ACC32",
        Imagenes: [
            "Accesorio de calzado/ACC32-img1"
        ]
    },
    {
        codigo: "ACC33",
        Imagenes: [
            "Accesorio de calzado/ACC33-img1"
        ]
    },
    {
        codigo: "ACC34",
        Imagenes: [
            "Accesorio de calzado/ACC34-img1"
        ]
    },
    {
        codigo: "ACC35",
        Imagenes: [
            "Accesorio de calzado/ACC35-img1",
            "Accesorio de calzado/ACC35-img2",
            "Accesorio de calzado/ACC35-img3"
        ]
    },
    {
        codigo: "ACC36",
        Imagenes: [
            "Accesorio de calzado/ACC36-img1"
        ]
    },
    {
        codigo: "ACC37",
        Imagenes: [
            "Accesorio de calzado/ACC37-img1"
        ]
    },
    {
        codigo: "ACC38",
        Imagenes: [
            "Accesorio de calzado/ACC38-img1"
        ]
    },


// -Medias------
    {
        codigo: "M01",
        Imagenes: [
            "Medias/M01-img1",
            "Medias/M01-img2",
        ],
    },
    {
        codigo: "M02",
        Imagenes: [
            "Medias/M02-img1",
            "Medias/M02-img2",
            "Medias/M02-img3",
            "Medias/M02-img4",
            "Medias/M02-img5"
        ],
    },
    {
        codigo: "M03",
        Imagenes: [
            "Medias/M03-img1",
            "Medias/M03-img2",
            "Medias/M03-img3"
        ],
    },
    {
        codigo: "M04",
        Imagenes: [
            "Medias/M04-img1",
        ],
    },
    {
        codigo: "M05",
        Imagenes: [
            "Medias/M05-img1",
            "Medias/M05-img2",
            "Medias/M05-img3",
            "Medias/M05-img4",
            "Medias/M05-img5"
        ],
    },
    {
        codigo: "M06",
        Imagenes: [
            "Medias/M06-img1",
            "Medias/M06-img2",
        ],
    },
    {
        codigo: "M07",
        Imagenes: [
            "Medias/M07-img1",
            "Medias/M07-img2",
            "Medias/M07-img3"
        ],
    },
    {
        codigo: "M08",
        Imagenes: [
            "Medias/M08-img1",
            "Medias/M08-img2",
            "Medias/M08-img3",
            "Medias/M08-img4",
            "Medias/M08-img5",
            "Medias/M08-img6"
        ],
    },

    {
        codigo: "M09",
        Imagenes: [
            "Medias/M09-img1",
            "Medias/M09-img2",
            "Medias/M09-img3",
            "Medias/M09-img4",
            "Medias/M09-img5",
            "Medias/M09-img6",
        ],
    },

    {
        codigo: "M10",
        Imagenes: [
            "Medias/M10-img1",
            "Medias/M10-img2",
            "Medias/M10-img3",
            "Medias/M10-img4",
            "Medias/M10-img5",
            "Medias/M10-img6",
            "Medias/M10-img7",
            "Medias/M10-img8",
            "Medias/M10-img9",
        ],
    },

    {
        codigo: "M11",
        Imagenes: [
            "Medias/M11-img1",
            "Medias/M11-img2",
            "Medias/M11-img3",
            "Medias/M11-img4",
            "Medias/M11-img5",
            "Medias/M11-img6",
        ],
    },

    {
        codigo: "M12",
        Imagenes: [
            "Medias/M12-img1",
            "Medias/M12-img2",
            "Medias/M12-img3",
        ],
    },

    {
        codigo: "M13",
        Imagenes: [
            "Medias/M13-img1",
            "Medias/M13-img2",
            "Medias/M13-img3",
            "Medias/M13-img4",
        ],
    },

    {
        codigo: "M14",
        Imagenes: [
            "Medias/M14-img1",
            "Medias/M14-img2",
            "Medias/M14-img3",
        ],
    },

    {
        codigo: "M15",
        Imagenes: [
            "Medias/M15-img1",
            "Medias/M15-img2",
            "Medias/M15-img3",
            "Medias/M15-img4",
            "Medias/M15-img5",
            "Medias/M15-img6",
        ],
    },

    {
        codigo: "M16",
        Imagenes: [
            "Medias/M16-img1",
            "Medias/M16-img2",
            "Medias/M16-img3",
            "Medias/M16-img4",
            "Medias/M16-img5",
            "Medias/M16-img6",
        ],
    },

    {
        codigo: "M17",
        Imagenes: [
            "Medias/M17-img1",
            "Medias/M17-img2",
            "Medias/M17-img3",
        ],
    },

    {
        codigo: "M18",
        Imagenes: [
            "Medias/M18-img1",
            "Medias/M18-img2",
            "Medias/M18-img3",
            "Medias/M18-img4",
            "Medias/M18-img5",
            "Medias/M18-img6",
            "Medias/M18-img7",
            "Medias/M18-img8",
            "Medias/M18-img9",
        ],
    },

    {
        codigo: "M19",
        Imagenes: [
            "Medias/M19-img1",
            "Medias/M19-img2",
            "Medias/M19-img3",
        ],
    },

    {
        codigo: "M20",
        Imagenes: [
            "Medias/M20-img1",
            "Medias/M20-img2",
            "Medias/M20-img3",
            "Medias/M20-img4",
            "Medias/M20-img5",
            "Medias/M20-img6",
        ],
    },

    {
        codigo: "M21",
        Imagenes: [
            "Medias/M21-img1",
            "Medias/M21-img2",
            "Medias/M21-img3"
        ],
    },

    {
        codigo: "M22",
        Imagenes: [
            "Medias/M22-img1",
            "Medias/M22-img2",
            "Medias/M22-img3",
            "Medias/M22-img4",
            "Medias/M22-img5",
            "Medias/M22-img6",
            "Medias/M22-img7",
            "Medias/M22-img8",
            "Medias/M22-img9",
            "Medias/M22-img10",
            "Medias/M22-img11",
            "Medias/M22-img12",
        ],
    },

    {
        codigo: "M23",
        Imagenes: [
            "Medias/M23-img1",
            "Medias/M23-img2",
            "Medias/M23-img3"
        ],
    },

    {
        codigo: "M24",
        Imagenes: [
            "Medias/M24-img1",
            "Medias/M24-img2",
            "Medias/M24-img3"
        ],
    },

    {
        codigo: "M25",
        Imagenes: [
            "Medias/M25-img1",
            "Medias/M25-img2",
            "Medias/M25-img3",
            "Medias/M25-img4",
        ],
    },

// -Vestimenta

    {
        codigo: "VE01",
        Imagenes: [
            "Vestimenta/VE01-img1",
            "Vestimenta/VE01-img2",
            "Vestimenta/VE01-img3",
            "Vestimenta/VE01-img4"
        ],
    },
    {
        codigo: "VE02",
        Imagenes: [
            "Vestimenta/VE02-img1",
            "Vestimenta/VE02-img2",
            "Vestimenta/VE02-img3",
            "Vestimenta/VE02-img4"
        ],
    },
    {
        codigo: "VE03",
        Imagenes: [
            "Vestimenta/VE03-img1",
        ],
    },
    {
        codigo: "VE04",
        Imagenes: [
            "Vestimenta/VE04-img1",
            "Vestimenta/VE04-img2",
            "Vestimenta/VE04-img3",
        ],
    },
    {
        codigo: "VE05",
        Imagenes: [
            "Vestimenta/VE05-img1",
            "Vestimenta/VE05-img2",
            "Vestimenta/VE05-img3"
        ],
    },
    {
        codigo: "VE06",
        Imagenes: [
            "Vestimenta/VE06-img1",
            "Vestimenta/VE06-img2",
            "Vestimenta/VE06-img3"
        ],
    },
    {
        codigo: "VE07",
        Imagenes: [
            "Vestimenta/VE07-img1",
            "Vestimenta/VE07-img2",
            "Vestimenta/VE07-img3",
            "Vestimenta/VE07-img4"
        ],
    },
    {
        codigo: "VE08",
        Imagenes: [
            "Vestimenta/VE08-img1",
        ],
    },
    {
        codigo: "VE09",
        Imagenes: [
            "Vestimenta/VE09-img1",
            "Vestimenta/VE09-img2",
        ],
    },
];