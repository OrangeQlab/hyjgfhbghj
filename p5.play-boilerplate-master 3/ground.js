class Ground{
    constructor(x,y,w,h){
        this.box=Bodies.rectangle(x,y,w,h,{isStatic:true})
        World.add(world,this.box)
        this.v=w
        this.a=h
    }
    Display(){
        rectMode(CENTER)
        fill ("lime")
        rect(this.box.position.x,this.box.position.y,this.v,this.a)
    }
    }