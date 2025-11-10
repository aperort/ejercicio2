import { Tablero } from "./Tablero";
/*export const creaTabla = {
    total: null,
    plantilla: null,
    tabla: null,
    init: (config)=> {
        creaTabla.total = config.total;
        creaTabla.plantilla = config.plantilla;
        creaTabla.tabla = config.tabla;
    }
}*/
function creaGridTemplate(total, plantilla, tabla) {
    tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    Array.from({ length: total*total }, (_, i) => {
        const clon = plantilla.content.cloneNode(true);
        const casilla = clon.querySelector('.casilla')
        casilla.textContent = ` ${(i%total)+1}, ${Math.floor(i/total)+1}`;
        casilla.addEventListener('click', (event) => {
            event.target.style.visibility = tablero.dispara;
            console.log(`Fila: ${casilla.dataset.fila}, Columna: ${casilla.dataset.columna}`);
        });
        casilla.dataset.fila = Math.floor(i/total);
        casilla.dataset.columna = i%total;
        tabla.appendChild(clon);
    });
}
