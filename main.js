let saludo = alert("Bienvenido a Wall-E");
const nombreBuscado = prompt('Ingrese tu nombre de USUARIO');
const usuarioEncontradoPorNombre = usuario.find(usuario => Usuario.nombre === nombreBuscado);




let meta = prompt("Ingresa tu meta del mes : ahorro o inversion ");
if (meta == "ahorro"){
    alert("Tu nueva meta del mes es Ahorrar")
}
let montoActual = Number(prompt("Ingrese el monto que ya tienes ahorrado"));
let metaAhorro = Number(prompt("Ingrese el monto que desea ahorrar"));
let resultado = calculadora(montoActual, metaAhorro);
    alert(`${montoActual} + ${metaAhorro} = ${resultado}`);
function sumar(montoActual, metaAhorro) {
resultado = montoActual + metaAhorro; }
alert(`${montoActual} + ${metaAhorro} = ${resultado}`);


if (meta == "inversion"){
    alert("Tu nueva meta del mes es Invertir")
let metaInvertir = Number(prompt("Ingrese el monto que desea invertir"));
let metaBolsa = (prompt("Ingrese la bolsa a la que desee invertir"));
let resultado = calculadora(montoActual, metaAhorro);
    alert(`${montoActual} + ${metaAhorro} = ${resultado}`);
}
else {
    alert("La meta solicitada no es valida")
}

function verObjetivo(){
    class Gestion {
    constructor(ingresos, egresos, meta) {
    this.ingresos = ingresos;
    this.egresos = egresos;
    this.meta= meta;
    }}}
    
    class Ahorro {
    constructor(montoActual, metaAhorro) {
    this.montoActual = montoActual;
    this.metaAhorro = metaAhorro;
    }}
    
    class Inversion {
    constructor(montoIventir, tasaInteres, ganancia) {
    this.montoIventir = montoIventir;
    this.tasaInteres = tasaInteres;
    this.ganancia = ganancia;
    }}
            
//LISTA DE USUARIOS
    
const usuario = [
    new Usuario('Emily'),
    new Usuario('Martin'),
    new Usuario('Renato'),
    new Usuario('Mirian') ,

];
