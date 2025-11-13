import { Submarino } from "./Submarino.js";

class Tablero {
    constructor(UIcontrol) {

        this.UIcontrol = UIcontrol;
        this.UIcontrol.start(this);
        this.submarino = new Submarino();
        this.size = 0;
    }

    creaGridTemplate(total) {
        this.size = total;
        
        this.submarino.x = Math.floor(Math.random() * total);
        this.submarino.y = Math.floor(Math.random() * total);
        console.log(`Submarino en: ${this.submarino.x}, ${this.submarino.y}`);

        const tabla = this.UIcontrol.control.board;

        const plantilla = this.UIcontrol.crearElementos('template');
        const divCasilla = this.UIcontrol.crearElementos('div');
        divCasilla.className = 'casilla';
        plantilla.content.appendChild(divCasilla);
        
        tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
        Array.from({ length: total*total }, (_, i) => {
            const clon = plantilla.content.cloneNode(true);
            const casilla = clon.querySelector('.casilla');

            casilla.textContent = `${i%total}, ${Math.floor(i/total)}`;
            
            casilla.dataset.fila = Math.floor(i/total);
            casilla.dataset.columna = i%total;

            casilla.addEventListener('click', (event) => {
                const columnaClick = parseInt(event.target.dataset.columna);
                const filaClick = parseInt(event.target.dataset.fila);
                this.dispara(columnaClick, filaClick);
            });
            
            tabla.appendChild(clon);
        });
    }


    dispara(x, y) {
    if(this.submarino.x === x && this.submarino.y === y) {
        this.UIcontrol.changeStatus("Le has dado");
        return true;
    }
    
    this.UIcontrol.changeStatus("no le has dado");

    const vecinos = [];

    if(this.submarino.y > 0) {
        vecinos[vecinos.length] = {x: this.submarino.x, y: this.submarino.y - 1};
    }
    if(this.submarino.y < this.size - 1) {
        vecinos[vecinos.length] = {x: this.submarino.x, y: this.submarino.y + 1};
    }
    if(this.submarino.x > 0) {
        vecinos[vecinos.length] = {x: this.submarino.x - 1, y: this.submarino.y};
    }
    if(this.submarino.x < this.size - 1) {
        vecinos[vecinos.length] = {x: this.submarino.x + 1, y: this.submarino.y};
    }
    
    this.submarino.mover(vecinos);
    return false;
}
}

export { Tablero }