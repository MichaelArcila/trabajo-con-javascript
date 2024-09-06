console.log("===============================================================================");
console.log("==   En esta consola se va a trabajar con números y se realizarán cálculos   ==");
console.log("===============================================================================");
console.log("");


const diasaño = 365;


let edad = prompt("Ingrese la edad con la que finalizarás este año: ");


let mayor = edad >= 18 ? "Eres o serás mayor de edad este año" : "Eres menor de edad";
console.log(mayor);


let año = prompt("Ingrese el año en el que se encuentra: ");


let fechanacimiento = año - edad;
console.log("Naciste en el año " + fechanacimiento);


let diasvividos = edad * diasaño;
console.log("Al momento en el que cumplas o cumpliste " + edad + " años, vas a tener " + diasvividos + " días de vida.");


let añoalazar = prompt("Ingrese un año al azar (que sea mayor a tu año de nacimiento): ");


if (añoalazar > fechanacimiento) {
   
    let calculoañoazar = (añoalazar - fechanacimiento) * diasaño;
    console.log("Cuando cumplas años en " + añoalazar + " vas a tener " + calculoañoazar + " días de vida.");
} else {
    console.log("Escribiste una fecha inválida.");
}

console.log("");
console.log("=========================================");
console.log(" Se calculará el descuento de una compra ");
console.log("=========================================");
console.log("");
const descuento1 = 0.10;
const descuento2 = 0.20;

let precioarticulo = prompt ("Ingrese el precio del artículo: ");

let preciodescuento = precioarticulo >= 50000 ? ( precioarticulo - (precioarticulo * descuento2)):( precioarticulo - (precioarticulo * descuento1))

console.log("Recibiste un descuento, ahora el precio final es: " + preciodescuento);

console.log("");
console.log("================================================");
console.log(" Se convertirán kilómetros a metros y viceversa ");
console.log("================================================");
console.log("");

const kilometrosenmetros=1000;
const metrosenkilometros=0.001;

let metros = prompt ("Ingrese los metros que desea convertir en kilómetros: ");
let calculometrosenkilometros = metros / kilometrosenmetros;
console.log(metros + " metros son: " + calculometrosenkilometros + " kilometros");
let kilometros = prompt ("Ingrese los kilómetros que desea convertir en metros: ");
let calculokilometrosenmetros = kilometros / metrosenkilometros;
console.log(kilometros + " kilometros son: " + calculokilometrosenmetros + " kilometros");