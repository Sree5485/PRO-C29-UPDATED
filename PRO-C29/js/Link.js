class Link {
    constructor(bodyA,bodyB){

        let lastLink= bodyA.body.bodies.length-2
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[lastLink],
            pointA:{x:0,y:0},
            bodyB:bodyB.body,
            pointB:{x:0,y:0},
            stiffness:0.08,
            length:10
        })
World.add(engine.world,this.link)
    }
}