class Vinculo {
constructor (corpo1,corpo2){
var ligacao = corpo1.body.bodies.length-2;
this.vinculo = Constraint.create ({
bodyA: corpo1.body.bodies[ligacao],
pointA: {x:0,y:0},
bodyB: corpo2,
pointB: {x:0,y:0},
length: -10,
stiffness: 0.01
})
World.add (engine.world,this.vinculo)
}
separar(){
World.remove(engine.world,this.vinculo)
}
}