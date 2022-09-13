class Chao {
    constructor(posX, posY, lar, alt){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(posX, posY, lar, alt, config);
        World.add(world,this.corpo);
        this.lar = lar;
        this.alt = alt;
    }

    chou(){
        var pos = this.corpo.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill("burlywood");
        rect(pos.x, pos.y, this.lar, this.alt);
        pop();
    }    
}