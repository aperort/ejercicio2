import { Submarino } from "./Submarino.js";
import { Celda } from "./Celda.js";
import { Vecinos } from "./Celda.js";

class Tablero {
    constructor() {
        /**
            this.tablero = null;
            this.size = 0;
         */
        this.submarino = new Submarino();
        this.status = document.getElementById("status");
        this.size = 0;
        /*console.log("El tablero se ha creado");*/
    }

    creaGridTemplate(total, plantilla, tabla) {
    this.size = total;
    
    this.submarino.x = Math.floor(Math.random() * total);
    this.submarino.y = Math.floor(Math.random() * total);
    console.log(`Submarino en: ${this.submarino.x}, ${this.submarino.y}`);
    
    tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    Array.from({ length: total*total }, (_, i) => {
        const clon = plantilla.content.cloneNode(true);
        const casilla = clon.querySelector('.casilla');
        casilla.textContent = ` ${i%total}, ${Math.floor(i/total)}`;
        
        casilla.addEventListener('click', (event) => {
            const filaClick = parseInt(casilla.dataset.fila);
            const columnaClick = parseInt(casilla.dataset.columna);
            
            this.dispara(columnaClick, filaClick, event.target);
        });
        
        casilla.dataset.fila = Math.floor(i/total);
        casilla.dataset.columna = i%total;
        tabla.appendChild(clon);
    });
}

    /*
        init(config) {
        this.size = config.size;
        
        let malla = Array.from({ length: this.size }, (v, i) => 
            Array.from({ length: this.size }, (v, j) => new Celda( i,j))
        );
        malla.forEach((item,i)=>item.forEach((celda,j)=>{
            if(i>0) celda.nuevoVecino(Vecinos.ARRIBA,malla[i-1][j]);
            if(i<this.size-1) celda.nuevoVecino(Vecinos.ABAJO,malla[i+1][j]);
            if(j>0) celda.nuevoVecino(Vecinos.IZQUIERDA,malla[i][j-1]);
            if(j<this.size-1) celda.nuevoVecino(Vecinos.DERECHA,malla[i][j+1]);
        }));
        this.tablero=malla.flat();
        this.submarino.init(this.size);
    };
    */

    dispara(x, y) {
    if(this.submarino.x === x && this.submarino.y === y) {
        this.status.innerHTML = "¡Le has dado!";
        return true;
    }
    
    this.status.innerHTML = "No le has dado";

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