alert("Llegaste a la sección de productos, esperamos que te gusten.");

let resultado = 0;

let ropa = [
    { id: 1, nombre: "falda turia", precio: 7099},
    { id: 2, nombre: "falda mini", precio: 8000},
    { id: 3, nombre: "falda nova", precio: 4500},
    { id: 4, nombre: "remera bianca", precio: 4500},
    { id: 5, nombre: "remera fire", precio: 4600},
    { id: 6, nombre: "remera what", precio: 4050},
    { id: 7, nombre: "vestido doha", precio: 6999},
    { id: 8, nombre: "vestido silver", precio: 9300},
    { id: 9, nombre: "vestido jenna", precio: 6700}
];

console.log("Ver todos los productos:")
for (let i = 0; i < ropa.length; i++) {
    console.log(ropa[i].nombre + ": " + ropa[i].precio);
}

console.log("Aumento de Julio:")
let aumentoJulio = ropa.map((el) => {
    return{
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(aumentoJulio)

// COMPRAR
function compra(){
    let prenda = prompt("Ingresa el nombre de la prenda elegida en minúscula.");
    let productoEncontrado = ropa.find((el) => el.nombre === prenda.toLowerCase());

    if(prenda == ropa[0].nombre){
        resultado += ropa[0].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[1].nombre){
        resultado += ropa[1].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[2].nombre){
        resultado += ropa[2].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[3].nombre){
        resultado += ropa[3].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[4].nombre){
        resultado += ropa[4].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[5].nombre){
        resultado += ropa[5].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[6].nombre){
        resultado += ropa[6].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[7].nombre){
        resultado += ropa[7].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else if(prenda == ropa[8].nombre){
        resultado += ropa[8].precio;
        alert(`Producto: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nel resultado de la compra es: ${resultado}`);
    }
    else{
        alert ("Esa opción no existe.");
    }
}
compra()

// VOLVER A COMPRAR
let compra2 = () =>{
    const prenda2 = prompt("¿Quieres seguir comprando? Escribe si o no.");
    if(prenda2=="si" || prenda2=="Si" || prenda2=="SI" ){
        return compra() , compra2()
    }
    else{
        alert(`Gracias por todo! el total de tu compra es de: $${resultado}.`);      
    }  
}
compra2()

// DESCUENTO

let descuento = prompt("Ingresa un cupón de descuento en caso de tenerlo:")

if(descuento === "HEAVEN"){
    let resultadoDescuento = (resultado * 20) / 100;
    resultado -= parseInt(resultadoDescuento);
    alert(`El resultado final de tu compra es de: ${resultado}.`);

}
else{
    alert("Ese cupón no es valido.");
}

// MÉTODO DE PAGO

let metodo = prompt("¿Qué método de pago utilizarás? Presiona 1 para efectivo, 2 para tarjeta de crédito y 3 para transferencias. Luego dirigete a la sección de Contacto para pagar.");

class lista{
    constructor(nombre){
        this.nombre = nombre;
    }
}

const metodos= [];

metodos.push(new lista("efectivo."));
metodos.push(new lista("Tarjeta de crédito."));
metodos.push(new lista("Tranferencia."));

if(metodo ==1){
    alert(`el método de pago seleccionado es: ${metodos[0].nombre}`)
}
else if(metodo == 2){
    alert(`el método de pago seleccionado es: ${metodos[1].nombre}`)
}
else if(metodo == 3){
    alert(`el método de pago seleccionado es: ${metodos[2].nombre}`)
}
else{
    alert("El método de pago es incorrecto.")
}
