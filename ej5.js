const leer = require("prompt-sync" )();
 let numIngresado3 = 0
 let cuenta = 0
let eleccion= 0
for (let i = 0; i < 3; i++){ 
    console.log("Ingrese 1 para sumar o 2 para restar");
    eleccion=Number(leer())
    if (eleccion == 1) {
        console.log("Ingrese un numero");
        numIngresado3=Number(leer())
        cuenta=numIngresado3+cuenta;
        console.log("El resultado es,",cuenta); 
    }
    else{
    console.log("Ingrese un numero");
    numIngresado3=Number(leer())
    cuenta=cuenta-numIngresado3;
    console.log("El resultado es,",cuenta);}

}