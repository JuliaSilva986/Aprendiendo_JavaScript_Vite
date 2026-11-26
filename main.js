// Importar los estilos con Vite
import "./style.css";


// 1. Generar un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;


// 2. Obtener elementos del DOM
const formulario = document.getElementById("formulario");
const inputNumero = document.getElementById("numero");
const botonAdivinar = document.getElementById("adivinar");
const botonReiniciar = document.getElementById("reiniciar");
const mensaje = document.getElementById("mensaje");
const contadorIntentos = document.getElementById("intentos");


// 3. Comprobar el número ingresado
formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const numeroJugador = Number(inputNumero.value);

    // Validar el número
    if (
        !Number.isInteger(numeroJugador) ||
        numeroJugador < 1 ||
        numeroJugador > 100
    ) {
        mensaje.textContent =
            "Ingresa un número entero entre 1 y 100.";
        return;
    }

    // Aumentar los intentos
    intentos++;
    contadorIntentos.textContent = intentos;

    // Comparar con el número secreto
    if (numeroJugador === numeroSecreto) {

        mensaje.textContent =
            `🎉 ¡Felicidades! Adivinaste el número ` +
            `${numeroSecreto} en ${intentos} intentos.`;

        botonAdivinar.disabled = true;
        inputNumero.disabled = true;

    } else if (numeroJugador < numeroSecreto) {

        mensaje.textContent =
            "📈 El número secreto es más alto.";

    } else {

        mensaje.textContent =
            "📉 El número secreto es más bajo.";
    }

    // Limpiar el campo
    inputNumero.value = "";

    if (!botonAdivinar.disabled) {
        inputNumero.focus();
    }

});


// 4. Funcionalidad adicional: reiniciar el juego
botonReiniciar.addEventListener("click", function() {

    // Generar un nuevo número
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Reiniciar los intentos
    intentos = 0;
    contadorIntentos.textContent = 0;

    // Restaurar los elementos
    mensaje.textContent = "¡Nueva partida! Adivina el número.";

    inputNumero.value = "";
    inputNumero.disabled = false;
    botonAdivinar.disabled = false;

    inputNumero.focus();

});