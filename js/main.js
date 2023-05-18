alert("Bienvenido! Esperamos que te guste la tienda");

let jugar = prompt("¿Quiéres jugar un pequeño juego? respone si o no.");

// Generar un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Pedir al jugador que adivine el número
let intentos = 0;
let numeroAdivinado;

if(jugar == "si"){
    do {
        numeroAdivinado = parseInt(prompt("Adivina el número (entre 1 y 10). Tienes 5 intentos."));
        intentos++;
        if (numeroAdivinado === numeroAleatorio) {
        alert("¡Felicitaciones! Adivinaste el número en " + intentos + " intentos. Ganaste un cupón del 20% de descuento para tu proxima compra: HEAVEN");
        break;
        } else if (numeroAdivinado < numeroAleatorio) {
        alert("El número es mayor. Intenta nuevamente.");
        } else {
        alert("El número es menor. Intenta nuevamente.");
        }
        } while (intentos <= 5);
}
