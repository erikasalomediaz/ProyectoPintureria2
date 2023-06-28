
//solicito tipo de cliente
const EsCliente = () => {

    let cliente = prompt("Para iniciar el Simulador de pintura ingrese 'SI' si es cliente, 'No' si no lo es").toUpperCase();
    while (cliente != "SI" && cliente != "NO") {
        cliente = prompt("Ingrese 'SI' si es cliente, 'No' si no lo es").toUpperCase();
    }
    if (cliente == "SI") {
        alert("¡Posee un descuento del 15% por ser cliente!");
    } else {
        alert("Sin descuentos disponibles.");
    }

    return cliente;
}

//calculo superficie techo
const calcularSupTecho = (techoAlto, techoAncho,errorTecho) => {
    while (techoAlto <= 0 || techoAlto == "" || isNaN(techoAlto)) {
        errorTecho.textContent = "Debe ingresar alto de Techo";
    }
    while (techoAncho <= 0 || techoAncho == "" || isNaN(techoAncho)) {
        errorTecho.textContent = "Debe ingresar alto  de Techo";
    }
    supTecho = techoAlto * techoAncho;
    errorTecho.textContent = "Superficie del techo : "+ supTecho;
    return supTecho ;
};

//calculo superficie paredes
const CalcularSupParedes = () => {
    let CantParedes = 0;
    while (CantParedes <= 0 || CantParedes == "" || isNaN(CantParedes)) {
        CantParedes = parseInt(prompt("Ingrese la cantidad de paredes"));
    }
    for (let i = 1; i <= CantParedes; i++) {
        let ParedAlto = 0;
        let ParedAncho = 0;
        while (ParedAlto <= 0 || ParedAlto == "" || isNaN(ParedAlto)) {
            ParedAlto = parseFloat(prompt("Ingrese el alto del pared " + i + " en metros"));
        }
        while (ParedAncho <= 0 || ParedAncho == "" || isNaN(ParedAncho)) {
            ParedAncho = parseFloat(prompt("Ingrese el ancho del pared " + i + " en metros"));
        }
        SupParedes += (ParedAlto * ParedAncho);
    }

    return SupParedes;
}

//calculo superficie aberturas
const CalcularSupAberturas = () => {
    let CantAberturas = 0;
    while (CantAberturas <= 0 || CantAberturas == "" || isNaN(CantAberturas)) {
        CantAberturas = parseInt(prompt("Ingrese la cantidad de aberturas"));
    }
    for (let i = 1; i <= CantAberturas; i++) {
        let AberAlto = 0;
        let AberAncho = 0;
        while (AberAlto <= 0 || AberAlto == "" || isNaN(AberAlto)) {
            AberAlto = parseFloat(prompt("Ingrese el alto de la abertura " + i + " en metros"));
        }
        while (AberAncho <= 0 || AberAncho == "" || isNaN(AberAncho)) {
            AberAncho = parseFloat(prompt("Ingrese el ancho de la abertura " + i + " en metros"));
        }
        SupAberturas += (AberAlto * AberAncho);
    }
    return SupAberturas;
}

const CalcularSupFinal = (SupTecho, SupParedes, SupAberturas) => {
    let SupFinal1 = SupTecho + SupParedes - SupAberturas;
    return SupFinal1;
}


//mostrar valores finales
MostrarValores = (SupFinal, rendimiento, precio, LitrosNec, cliente, PrecioTotal) => {
    let ValoresFinales = "Superficie total a pintar: " + SupFinal + " m2 " + "\n";
    ValoresFinales += "Rendimiento del producto: " + rendimiento + "m2 por litro " + "\n";
    ValoresFinales += "Precio por litro: " + precio + "\n";
    ValoresFinales += "Litros necesarios: " + LitrosNec + "\n";
    if (cliente == "SI") {
        ValoresFinales += "Precio total con descuento del 15% por ser cliente: " + PrecioTotal + "\n";
    }
    else {
        ValoresFinales += "Precio total: " + PrecioTotal + "\n";
    }
    return ValoresFinales;
}

const crearElem = (cantida, contenedor, dinamicos, elemento) => {

    for (let i = 0; i < cantida; i++) {
        // Crea el elemento
        let nuevoLabel = document.createElement("label");
        let nuevoElemento = document.createElement("input");
        let nuevoElemento1 = document.createElement("input");

        // Agrega algún contenido al nuevo elemento si es necesario
        nuevoLabel.textContent = elemento + " número: " + (i + 1);

        nuevoElemento.type = "number";
        nuevoElemento.placeholder = "Ancho, en metros";
   
        nuevoElemento1.type = "number";
        nuevoElemento1.placeholder = "Alto, en metros";

        nuevoLabel.className = dinamicos;
        nuevoElemento.className = dinamicos;
        nuevoElemento1.className = dinamicos;

        // Agrega el nuevo elemento al contenedor
        contenedor.appendChild(nuevoLabel);
        contenedor.appendChild(nuevoElemento);
        contenedor.appendChild(nuevoElemento1);
    }
    console.log("contenedor:" + contenedor);
    return contenedor.length;
}


const borrarElementos = (clase) => {
    let dinamicChau = document.getElementsByClassName(clase);
    console.log("dinamic :"+ dinamicChau.length);
    longDinamic = dinamicChau.length;

    if (longDinamic > 0) {
        for (let i = longDinamic-1 ; i >= 0; i--) {
            console.log("i "+ i);
            console.log(dinamicChau[i]);
            dinamicChau[i].remove();
        }
    }

}