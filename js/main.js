

//entrada de datos / procesamiento / salida
let supTecho = 0;
let techoAlto = 0;
let techoAncho = 0;
let supParedes = 0;
let supAberturas = 0;
let aberAlto = 0;
let aberAncho = 0;
let litrosNec = 0;
let rendimiento = 0;
let precio = 0;
let descuento = 1;
let precioTotal = 0;
let ind = 0;
let cliente = "SI";

let tiposPro = ["antihumedad", "esmalte", "latex", "revestimiento", "impermeabilizante"];
class Producto {
    constructor(tipoProd, rendimientoProd, precioProd) {
        this.tipo = tipoProd;
        this.rendimiento = rendimientoProd;
        this.precio = precioProd;
    }
}

const producto1 = new Producto(tiposPro[0], 8, 3500);
const producto2 = new Producto(tiposPro[1], 6, 2350);
const producto3 = new Producto(tiposPro[2], 5, 1000);
const producto4 = new Producto(tiposPro[3], 3, 10000);
const producto5 = new Producto(tiposPro[4], 0.5, 7500);

let btnSi = document.getElementById("botonSi");
let btnNo = document.getElementById("botonNo");
let esCli = document.getElementById("esCliente");
btnSi.addEventListener("click", ers = () => { esCli.textContent = "Es cliente, obtenés 15% de descuento"; cliente = "SI" });
btnNo.addEventListener("click", ers = () => { esCli.textContent = "Sin descuentos disponibles."; cliente = "NO" });


let inTechoAncho = document.getElementById("inTecAncho");
let inTechoAlto = document.getElementById("inTecAlto");
techoAncho = inTechoAncho.value;
techoAlto = inTechoAlto.value;
let errorTecho = document.getElementById("divTechoError");

inTechoAncho.onchange = () => {
    console.log("inTechoAncho");
    if (inTechoAncho.value > 0 && inTechoAlto.value > 0) {
        supTecho = calcularSupTecho(inTechoAlto.value, inTechoAncho.value, errorTecho);
        console.log("superficie techo: " + supTecho);
    }
    else { errorTecho.textContent = "Debe ingresar alto y ancho de Techo"; }
}

inTechoAlto.onchange = () => {
    console.log("inTechoAlto");
    if (inTechoAncho.value > 0 && inTechoAlto.value > 0) {
        supTecho = calcularSupTecho(inTechoAlto.value, inTechoAncho.value, errorTecho);
        console.log("superficie techo: " + supTecho);
    }
    else { errorTecho.textContent = "Debe ingresar alto y ancho de Techo"; }
}
/* SupParedes = CalcularSupParedes();
alert("Superficie paredes :" + SupParedes);

SupAberturas = CalcularSupAberturas();
alert("Superficie aberturas :" + SupAberturas); */




let contenPared = document.getElementById("divParedes");
let cantPare = document.getElementById("cantParedes");
let boton = document.getElementById("btnPare");


let contenAper = document.getElementById("divAberturas");
let cantAper = document.getElementById("cantAberturas");
let boton2 = document.getElementById("btnAper");

let ddProductos = document.getElementById("ddMenu");
console.log(ddProductos);
ddProductos.onchange = () => {

    console.log(ddProductos.value);
}

let dropdownItems = document.querySelectorAll("#ddMenu .dropdown-item");
let dropdownButton = document.getElementById("dropdownButton");

  dropdownItems.forEach(function(item) {
    item.addEventListener("click", function() {
        let valorSeleccionado = item.getAttribute("data-value");
        dropdownButton.textContent = valorSeleccionado;
      console.log(valorSeleccionado);
    });
  });




cantPare.onchange = () => {
    borrarElementos("dinamicAper");
    borrarElementos("dinamicPared");
    cantAper.value = "";
    boton.addEventListener("click", crearElem(cantPare.value, contenPared, "dinamicPared", "Pared"));
}

cantAper.onchange = () => {
    borrarElementos("dinamicAper");
    boton2.addEventListener("click", crearElem(cantAper.value, contenAper, "dinamicAper", "Abertura"));
}












