class Ball{
    constructor(x,y,w){
        this.box=Bodies.circle(x,y,w)
        World.add(world,this.box)
        this.v=w
    }
    Display(){
        ellipseMode(RADIUS)
        fill ("red")
        ellipse(this.box.position.x,this.box.position.y,this.v,this.v)
    }
    }