class Box{
constructor(x,y,w,h){
    this.box=Bodies.rectangle(x,y,w,h)
    World.add(world,this.box)
    this.v=w
    this.a=h
}
Display(){
    rectMode(CENTER)
    fill ("orange")
    push ()
    translate(this.box.position.x,this.box.position.y)
    rotate(this.box.angle)
    rect(0,0,this.v,this.a)
    pop()
}
}