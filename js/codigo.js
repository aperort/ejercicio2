import { Tablero } from "./Tablero.js";

const nuevoTablero = new Tablero();

nuevoTablero.creaGridTemplate(8, document.getElementById('casilla-template'), document.getElementById('tabla'));

/*UI.init({
    status: document.getElementById("status"),
    table: document.getElementsByClassName("table"),
    sizes: document.getElementsByClassName("sizes")
})
UI.setStatus("Hola");
*/