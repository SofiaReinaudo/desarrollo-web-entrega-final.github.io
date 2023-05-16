alert("Llegaste a la sección de productos, esperamos que te gusten.");

let resultado = 0;

function compra(){
    let prenda = prompt("Ingresa el nombre de la prenda elegida.")

    if(prenda == "falda turia" || prenda == "Falda Turia" || prenda == "FALDA TURIA" ){
        resultado += 7099
        alert("añadiste a tu compra a Falda Turia. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "vestido doha" || prenda == "Vestido Doha" || prenda == "VESTIDO DOHA" ){
        resultado += 6999
        alert("añadiste a tu compra a Vestido Doha. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "remera bianca" || prenda == "Remera Bianca" || prenda == "REMERA BIANCA"){
        resultado += 4500
        alert("añadiste a tu compra a Remera Bianca. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "remera fire" || prenda == "Remera Fire" || prenda == "REMERA FIRE"){
        resultado += 4600
        alert("añadiste a tu compra a Remera Fire. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "falda mini" || prenda == "Falda Mini" || prenda == "FALDA MINI"){
        resultado += 8000
        alert("añadiste a tu compra a Falda Mini. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "vestido silver" || prenda == "Vestido Silver" || prenda == "VESTIDO SILVER"){
        resultado += 9300
        alert("añadiste a tu compra a Vestido Silver. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "remera what" || prenda == "Remera What" || prenda == "REMERA WHAT"){
        resultado += 4050
        alert("añadiste a tu compra a Remera What. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "vestido jenna" || prenda == "Vestido Jenna" || prenda == "VESTIDO JENNA"){
        resultado += 6700
        alert("añadiste a tu compra a Vestido Jenna. El precio total de tu compra es: $" + resultado + ".");
    }
    else if(prenda == "falda nova" || prenda == "Falda Nova" || prenda == "FALDA NOVA"){
        resultado += 7080
        alert("añadiste a tu compra a Falda Nova. El precio total de tu compra es: $" + resultado + ".");
    }
    else{
        alert ("Esa opción no existe.")
    }
}

compra();

function compra2(){
    const prenda2 = prompt("¿Quieres seguir comprando? Escribe si o no.");
    if(prenda2=="si" || prenda2=="Si" || prenda2=="SI" ){
        return compra() , compra2()
    }
    else{
        alert("Gracias por todo! el total de tu compra es de: $" + resultado + ".");      
    }  
}

compra2();

function pago(){
    let metodo = prompt("¿Qué medio de pago utilizarás? Presiona 1 para efectivo, 2 para tarjeta de crédito y 3 para transferencias.");

        switch (metodo) {
            case '1':
                alert("el método de pago es en efectivo.");
                alert("Escribe tus datos personales en la sección de contactos y nos comunicaremos contigo para realizar la compra.");
            break;
            case '2':
                alert("el método de pago es con tarjeta de crédito.");
                alert("Escribe tus datos personales en la sección de contactos y nos comunicaremos contigo para realizar la compra.");
            break;
            case '3':
                alert("el método de pago es con transferencia.");
                alert("Escribe tus datos personales en la sección de contactos y nos comunicaremos contigo para realizar la compra.");
            break;  
            default:
            alert("el método de pago es incorrecto.");
        }
}

pago()
