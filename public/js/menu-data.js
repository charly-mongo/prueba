// Datos del menú de George Burger
const menuData = {
    hamburguesas: [
        { name: "Asadera", ingredients: "Carne+Q.Asadero", price: 63 },
        { name: "Especial", ingredients: "Carne+Carnes Frías", price: 63 },
        { name: "Doble", ingredients: "Carne+Jamón+Q.Amarillo", price: 60 },
        { name: "Champiqueso", ingredients: "Carne+Champiñón+Q.Asadero", price: 76 },
        { name: "Petra", ingredients: "Carne+Q.Asadero+Tocino", price: 78 },
        { name: "Campechana", ingredients: "Asadera+Jamón+Q.Amarillo", price: 73 },
        { name: "Ejecutiva", ingredients: "Carne+Carnes Frías+Salchicha", price: 95 },
        { name: "Española", ingredients: "Carne+Q.Asadero+Salchicha", price: 95 },
        { name: "Embajadora", ingredients: "Carne+Carnes Frías+Q.Asadero+Salchicha", price: 108 },
        { name: "Americana", ingredients: "Doble Carne+Doble Q.Amarillo", price: 100 },
        { name: "Choriqueso", ingredients: "Chorizo+Q.Asadero", price: 45 },
        { name: "Ranchera", ingredients: "Carne+Chorizo+Q.Asadero", price: 76 },
        { name: "Hawaiana", ingredients: "Carne+Piña+Q.Asadero", price: 76 },
        { name: "Hawaiana Especial", ingredients: "Carne+Piña+Q.Asadero+Carnes Frías", price: 89 },
        { name: "Especial Asadera", ingredients: "Carne+Q.Asadero+Carnes Frías", price: 76 },
        { name: "Ahumada", ingredients: "Chuleta", price: 50 },
        { name: "Ahumada Especial", ingredients: "Chuleta+Carnes Frías", price: 63 },
        { name: "Mexicana", ingredients: "Chuleta+Carne", price: 84 },
        { name: "Norteña", ingredients: "Carne+Chuleta+Q.Asadero", price: 97 },
        { name: "Italiana", ingredients: "Chuleta+Q.Asadero", price: 63 },
        { name: "Extravagante", ingredients: "Carne+Chuleta+Q.Asadero+Carnes Frías", price: 110 },
        { name: "Descarnada", ingredients: "Carnes Frías+Q.Amarillo", price: 48 },
        { name: "Descarnada Asadero", ingredients: "Carnes Frías+Q.Amarillo+Q.Asadero", price: 61 },
        { name: "Sencilla", ingredients: "Carne de Res", price: 50 },
        { name: "Big Sencilla", ingredients: "2 Carnes de Res", price: 84 },
        { name: "Costeña", ingredients: "Camarón+Q.Asadero+Tocino+Ch.Morrón+Sal.Inglesa", price: 96 },
        { name: "Super Costeña", ingredients: "Camarón+Q.Asadero+Carne de Res+Tocino+Ch.Morrón", price: 130 },
        { name: "La Popotiña", ingredients: "Carne de Pierna+Tocino+Chile Morrón+Q.Asadero", price: 82 },
        { name: "Grosera", ingredients: "Salchicha para Asar+Q.Asadero+Tocino", price: 60 },
        { name: "Super Grosera", ingredients: "Salchicha para Asar+Q.Asadero+Tocino+Carne de Res", price: 94 }
    ],
    hotdogs: [
        { name: "Dogo de Pavo", ingredients: "Salchicha de Pavo", price: 50 },
        { name: "Grosero", ingredients: "Salchicha para Asar+Q.Asadero+Tocino Rebanado", price: 60 },
        { name: "Asadero", ingredients: "Salchicha+Q.Asadero", price: 73 },
        { name: "Big Grosero", ingredients: "Grosero+Carnes Frías", price: 76 },
        { name: "Choriqueso", ingredients: "Salchicha+Chorizo+Q.Asadero", price: 76 },
        { name: "Champiqueso", ingredients: "Salchicha+Champiñones+Q.Asadero", price: 63 },
        { name: "Campechano", ingredients: "Asadero+Jamón+Q.Amarillo", price: 73 },
        { name: "Especial", ingredients: "Salchicha+C.Frías", price: 63 },
        { name: "Hawaiano", ingredients: "Salchicha+Q.Asadero+Piña", price: 76 },
        { name: "Hawaiano Especial", ingredients: "Salchicha+Q.Asadero+Piña+C.Frías", price: 89 },
        { name: "Doble", ingredients: "Salchicha+Jamón+Q.Amarillo", price: 60 },
        { name: "Descarnado", ingredients: "Jamón+Pastel+Q.de Puerco+Mortadela+Salami", price: 48 },
        { name: "de Pierna", ingredients: "Salchicha de Pierna", price: 48 }
    ],
    sincronizadas: [
        { name: "Sincronizada Sencilla", ingredients: "T.Harina+Jamón+Q.Asadero+Q.Amarillo", price: 51 },
        { name: "Sincronizada Especial", ingredients: "T.Harina+Jamón+Q.Asadero+Q.Amarillo+Pierna", price: 81 },
        { name: "Sincronizada Super", ingredients: "T.Harina+Jamón+Q.Asadero+Q.Amarillo+Champiñones", price: 64 },
        { name: "Sincronizada Matona", ingredients: "T.Harina+Jamón+Q.Asadero+Q.Amarillo+Pierna+Salchicha Grosera", price: 125 },
        { name: "Sincronizada Costeña", ingredients: "T.Harina+Jamón+Q.Asadero+Q.Amarillo+Camarón+Pierna", price: 125 }
    ],
    tortas: [
        { name: "Torta Sencilla", ingredients: "Telera+Pierna", price: 50 },
        { name: "Torta Especial", ingredients: "Carnes Frías+Pierna", price: 63 },
        { name: "Torta Asadera", ingredients: "Pierna+Q.Asadero", price: 63 },
        { name: "Torta Cubana", ingredients: "Jamón+Q.Asadero+Salchicha+Pierna", price: 101 },
        { name: "Burro Sencillo", ingredients: "Carne de Pierna", price: 50 },
        { name: "Burro Asadero", ingredients: "Carne de Pierna+Q.Asadero", price: 63 },
        { name: "Burro Especial", ingredients: "Carne de Pierna+Carnes Frías", price: 63 },
        { name: "Burro Costeño", ingredients: "Carne de Pierna+Camarón+Q.Asadero", price: 106 }
    ],
    bebidas: [
        { name: "Coca-Cola", ingredients: "Refresco 600ml", price: 30 },
        { name: "Coca-Cola Light", ingredients: "Refresco 600ml", price: 30 },
        { name: "Sprite", ingredients: "Refresco 600ml", price: 30 },
        { name: "Fanta", ingredients: "Refresco 600ml", price: 30 },
        { name: "Fresca", ingredients: "Refresco 600ml", price: 30 },
        { name: "Manzana Lift", ingredients: "Refresco 600ml", price: 30 },
        { name: "Agua Natural", ingredients: "Botella 600ml", price: 30 },
        { name: "Agua de Jamaica", ingredients: "Vaso grande", price: 30 },
        { name: "Agua de Arroz", ingredients: "Vaso grande", price: 30 }
    ]
};

// Ingredientes extra disponibles
const extraIngredients = [
    { name: "Carne", price: 34 },
    { name: "Carnes Frías", price: 13 },
    { name: "Q. Asadero", price: 13 },
    { name: "Salchicha para Asar", price: 44 },
    { name: "Piña", price: 13 },
    { name: "Champiñón", price: 13 },
    { name: "Salchicha de Pavo", price: 34 },
    { name: "Chuleta", price: 34 },
    { name: "Camarón", price: 46 },
    { name: "Tocino", price: 15 },
    { name: "Carne de Pierna", price: 34 },
    { name: "Chorizo", price: 13 },
    { name: "Q. Amarillo", price: 8 }
];

// Verduras incluidas
const vegetables = [
    "Jitomate",
    "Cebolla",
    "Chile"
];

// Aderezos incluidos
const condiments = [
    "Crema",
    "Mayonesa",
    "Catsup",
    "Mostaza"
];

// Zonas de entrega y costos
const deliveryZones = {
    centro: { name: "Centro", cost: 20 },
    norte: { name: "Zona Norte", cost: 30 },
    sur: { name: "Zona Sur", cost: 35 },
    oriente: { name: "Zona Oriente", cost: 40 },
    poniente: { name: "Bonaterra", cost: 80 }
};
