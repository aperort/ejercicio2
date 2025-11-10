class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;

        console.log("El submarino se ha creado");
    }

    init(size) {
        this.x = 19;
        this.y = 19;
    }

    mover(vecinos) {
        const vecino =  vecinos[Math.floor(Math.random() * vecinos.length)];

        this.x = vecino.x;
        this.y = vecino.y;
    }
}

export{Submarino}
 